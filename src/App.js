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
        const list = await fetch('http://176.119.51.91:5000/').then(res => res.json()).then(res => this.setState({
            matches: {
                status: "loaded",
                list: res.data.matches
            }
        }));
    };

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
