import React, {Component} from 'react';
import FormMatch from "./components/FormMatch";
import MatchesList from "./components/MatchesList";
import PlayersList from "./components/PlayersList";
import {players} from "./constants/players";
import './App.css';
import {teams} from "./constants/teams";

class App extends Component {

    constructor(props) {
        super(props);

        //Players list
        this.state = {
            playersList: players,
            teams,
            matches: {
                status: "pending",
                list: []
            }
        }
    }

    fetchMatchesList = async () => {
        const list = await fetch('http://176.119.51.91:5000/').then(res => res.json()).then(res => {

            const matchesList = res.data.matches.map((match, i) => {
                const player1 = Number(this.state.playersList[match.home.playerId].value);
                const player2 = Number(this.state.playersList[match.away.playerId].value);

                const player1ovr = Number(match.home.teamAttack) + Number(match.home.teamMidfield) + Number(match.home.teamDefense);
                const player2ovr = Number(match.away.teamAttack) + Number(match.away.teamMidfield) + Number(match.away.teamDefense);

                const gm = this.getGoalMultiplier(match.home.goals, match.away.goals);
                const e1 = 1 / (1 + Math.pow(10, ((player2 - player1) / 400 + (player2ovr - player1ovr) / 48)));
                const s = this.getResult(match.home.goals, match.away.goals);

                const ratingDelta = 24 * gm * (s - e1);

                const {playersList} = this.state;
                playersList[match.home.playerId].value += ratingDelta;
                playersList[match.away.playerId].value -= ratingDelta;

                this.setState({
                    playersList
                });

                return {
                    ...match,
                    ratingDelta
                };
            });

            this.setState({
                matches: {
                    status: "loaded",
                    list: matchesList
                }
            });

        });

    };

    getGoalMultiplier = (homeGoals, awayGoals) => {
        const diff = Math.abs(homeGoals - awayGoals);

        if (diff < 2) {
            return 1;
        } else if (diff === 2) {
            return 3 / 2;
        } else {
            return (11 + diff) / 8;
        }
    };

    getResult = (homeGoals, awayGoals) => {
        if (homeGoals > awayGoals) {
            return 1;
        } else if (homeGoals === awayGoals) {
            return .5;
        } else {
            return 0
        }
    }

    componentWillMount() {
        this.fetchMatchesList();
        //this.submitMatch();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {/*<img src='http://www.cloudtechnologies.pl/img/cloudtechnologies.png' alt="logo" />*/}
                    <div className="row text-center">
                        <h1 className="display-4 m-5">Office Elo Soccer Rating</h1>
                    </div>
                    <FormMatch playersList={this.state.playersList} teams={this.state.teams}/>

                    <PlayersList playersList={this.state.playersList}/>

                    <MatchesList matches={this.state.matches} teams={this.state.teams}
                                 playersList={this.state.playersList}/>

                </div>
            </div>
        );
    }
}

export default App;
