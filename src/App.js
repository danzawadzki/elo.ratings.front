import React, {Component} from 'react';
import FormMatch from "./components/FormMatch";
import MatchesList from "./components/MatchesList";
import PlayersList from "./components/PlayersList";
import {players} from "./constants/players";
import './App.css';
import {teams} from "./constants/teams";

class App extends Component {

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

                playersList[match.home.playerId].goalsScored += parseInt(match.home.goals);
                playersList[match.home.playerId].goalsConceded += parseInt(match.away.goals);

                playersList[match.away.playerId].goalsScored += parseInt(match.away.goals);
                playersList[match.away.playerId].goalsConceded += parseInt(match.home.goals);

                playersList[match.home.playerId].games++;
                playersList[match.away.playerId].games++;

                switch (s) {
                    case 1:
                        playersList[match.home.playerId].won++;
                        playersList[match.home.playerId].form.push("W");
                        playersList[match.away.playerId].lost++;
                        playersList[match.away.playerId].form.push("L");
                        break;
                    case .5:
                        playersList[match.home.playerId].draw++;
                        playersList[match.home.playerId].form.push("D");
                        playersList[match.away.playerId].draw++;
                        playersList[match.away.playerId].form.push("D");
                        break;
                    case 0:
                        playersList[match.home.playerId].lost++;
                        playersList[match.home.playerId].form.push("L");
                        playersList[match.away.playerId].won++;
                        playersList[match.away.playerId].form.push("W");
                        break;
                }


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

    componentWillMount() {
        this.fetchMatchesList();
        //this.submitMatch();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <img src="http://www.fifplay.com/img/public/fifa-18-logo-black.png" alt="" className="logo mt-3"/>
                        <h1 className="display-4 mt-2 mb-5">Office Elo Soccer Rating</h1>
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
