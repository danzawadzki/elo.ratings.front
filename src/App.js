import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        //Players list
        this.state = {
            playersList: {
                1: {name: "Mikołaj Retyk", value: 1500},
                2: {name: "Mateusz Kamola", value: 1500},
                3: {name: "Łukasz Margas", value: 1500},
                4: {name: "Piotr Podolski", value: 1500},
                5: {name: "Daniel Zawadzki", value: 1500},
                6: {name: "Przemysław Siemaszko", value: 1500},
                7: {name: "Jakub Gajewski", value: 1500}
            },

            teamsList: {
                1: {
                    name: "Russia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/45px-Flag_of_Russia.svg.png"
                },
                2: {
                    name: "Brazil",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/43px-Flag_of_Brazil.svg.png"
                },
                3: {
                    name: "Iran",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/46px-Flag_of_Iran.svg.png"
                },
                4: {
                    name: "Japan",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png"
                },
                5: {
                    name: "Mexico",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/46px-Flag_of_Mexico.svg.png"
                },
                6: {
                    name: "Belgium",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/45px-Flag_of_Belgium_%28civil%29.svg.png"
                },
                7: {
                    name: "South Korea",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/45px-Flag_of_South_Korea.svg.png"
                },
                8: {
                    name: "Saudi Arabia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/45px-Flag_of_Saudi_Arabia.svg.png"
                },
                9: {
                    name: "Germany",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/46px-Flag_of_Germany.svg.png"
                },
                10: {
                    name: "England",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/46px-Flag_of_England.svg.png"
                },
                11: {
                    name: "Spain",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/45px-Flag_of_Spain.svg.png"
                },
                12: {
                    name: "Nigeria",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/46px-Flag_of_Nigeria.svg.png"
                },
                13: {
                    name: "Costa Rica",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/46px-Flag_of_Costa_Rica.svg.png"
                },
                14: {
                    name: "Poland",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/46px-Flag_of_Poland.svg.png"
                },
                15: {
                    name: "Egypt",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/45px-Flag_of_Egypt.svg.png"
                },
                16: {
                    name: "Iceland",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/42px-Flag_of_Iceland.svg.png"
                },
                17: {
                    name: "Serbia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/45px-Flag_of_Serbia.svg.png"
                },
                18: {
                    name: "Portugal",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/45px-Flag_of_Portugal.svg.png"
                },
                19: {
                    name: "France",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/45px-Flag_of_France.svg.png"
                },
                20: {
                    name: "Uruguay",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/45px-Flag_of_Uruguay.svg.png"
                },
                21: {
                    name: "Argentina",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/46px-Flag_of_Argentina.svg.png"
                },
                22: {
                    name: "Colombia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/45px-Flag_of_Colombia.svg.png"
                },
                23: {
                    name: "Panama",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/45px-Flag_of_Panama.svg.png"
                },
                24: {
                    name: "Senegal",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_5b0d4ac4fdae5fb3d71562ffSenegal.svg/45px-Flag_of_Senegal.svg.png"
                },
                25: {
                    name: "Morocco",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/45px-Flag_of_Morocco.svg.png"
                },
                26: {
                    name: "Tunisia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/45px-Flag_of_Tunisia.svg.png"
                },
                27: {
                    name: "Switzerland",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/32px-Flag_of_Switzerland.svg.png"
                },
                28: {
                    name: "Croatia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/46px-Flag_of_Croatia.svg.png"
                },
                29: {
                    name: "Sweden",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/46px-Flag_of_Sweden.svg.png"
                },
                30: {
                    name: "Denmark",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/40px-Flag_of_Denmark.svg.png"
                },
                31: {
                    name: "Australia",
                    flag_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/46px-Flag_of_Australia.svg.png"
                },
                32: {
                    name: "Peru",
                    flag_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/45px-Flag_of_Peru.svg.png"
                }
            },

            matchesList: [
                {
                    id: 1,
                    date: '2018-01-01',
                    home: {teamId: 1, playerId: 1, goals: 4, teamAttack: 80, teamDefense: 82, teamMidfield: 85},
                    away: {teamId: 2, playerId: 2, goals: 2, teamAttack: 86, teamDefense: 82, teamMidfield: 79}
                },
                {
                    id: 2,
                    date: '2018-01-01',
                    home: {teamId: 16, playerId: 6, goals: 0, teamAttack: 89, teamDefense: 86, teamMidfield: 50},
                    away: {teamId: 22, playerId: 7, goals: 4, teamAttack: 91, teamDefense: 75, teamMidfield: 50}
                },
                {
                    id: 2,
                    date: '2018-01-01',
                    home: {teamId: 19, playerId: 4, goals: 1, teamAttack: 82, teamDefense: 87, teamMidfield: 84},
                    away: {teamId: 23, playerId: 3, goals: 4, teamAttack: 86, teamDefense: 80, teamMidfield: 86}
                }
            ]
        }
    }

    fetchMatchesList = async () => {
        const list = await fetch('http://176.119.51.91:5000/').then(res => res.json()).then(res => console.log(res.data));

        return list;
    };

    submitMatch = async (home, guest, date) => {
        const data = {
            date: '2018-01-01',
            home: {teamId: 1, playerId: 1, goals: 4, teamAttack: 80, teamDefense: 82, teamMidfield: 85},
            away: {teamId: 2, playerId: 2, goals: 2, teamAttack: 86, teamDefense: 82, teamMidfield: 79}
        };

        const submit = await fetch('http://176.119.51.91:5000/', {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(res => console.log(res));
    }

    componentWillMount() {
        this.fetchMatchesList();
        this.submitMatch();
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {/*<img src='http://www.cloudtechnologies.pl/img/cloudtechnologies.png' alt="logo" />*/}
                    <div className="row text-center">
                        <h1 className="display-4 m-5">Office Elo Soccer Rating</h1>
                    </div>
                    <form>
                        <div className="form-row">

                            {/* Home Player */}
                            <div className="col-6 matchForm__player">
                                <h4 className="col-12 text-center">Player 1</h4>
                                <div className="row">
                                    <div className="col-9 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Home Player</small>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            {Object.keys(this.state.playersList).map(player =>
                                                <option
                                                    value={player}>{player} - {this.state.playersList[player].name}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-3 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Goals</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Home Team</small>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Attack</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Midfield</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Defense</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                </div>
                            </div>

                            {/* Away Player */}

                            <div className="col-6 matchForm__player">
                                <div className="row">
                                    <h4 className="col-12 text-center">Player 2</h4>
                                </div>
                                <div className="row">
                                    <div className="col-3 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Goals</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>

                                    <div className="col-9 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Player</small>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            {Object.keys(this.state.playersList).map(player =>
                                                <option
                                                    value={player}>{player} - {this.state.playersList[player].name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Team</small>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Attack</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Midfield</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                    <div className="col-2 p-1">
                                        <small id="emailHelp" className="form-text text-muted">Defense</small>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary pr-4 pl-4 mt-3 mb-3">Submit match</button>
                        </div>
                    </form>

                    <div className="row">
                        <h3 className="text-center col-12">Players List</h3>
                        <div className="col-12 text-left ">
                            <table className="table table-bordered table-hover table-sm">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">name</th>
                                    <th scope="col">rating</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.keys(this.state.playersList).map(player => (
                                    <tr key={player}>
                                        <th scope="row">{player}</th>
                                        <td>{this.state.playersList[player].name}</td>
                                        <td>{this.state.playersList[player].value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <h3 className="text-center col-12">Latest Matches</h3>
                        <div className="col-12 text-left ">
                            <table className="table table-bordered table-hover table-sm table__matches">
                                <thead>
                                <tr>
                                    <th scope="col">Team</th>
                                    <th scope="col">Player 1</th>
                                    <th scope="col">Result</th>
                                    <th scope="col">Player 2</th>
                                    <th scope="col">Team</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.matchesList.map((match, i) => (
                                    <tr key={'match-' + i}>
                                        <th scope="row">
                                            <img src={this.state.teamsList[match.home.teamId].flag_url} alt="flag"
                                                 className="match__flag"/>
                                            {this.state.teamsList[match.home.teamId].name}
                                            <small className="ml-1 mr-1 text-muted">(
                                                {match.home.teamAttack}:{match.home.teamMidfield}:{match.home.teamDefense})
                                            </small>
                                        </th>
                                        <td>{this.state.playersList[match.home.playerId].name}</td>
                                        <td>{match.home.goals} : {match.away.goals}</td>
                                        <td>{this.state.playersList[match.away.playerId].name}</td>
                                        <th>
                                            <img src={this.state.teamsList[match.away.teamId].flag_url} alt="flag"
                                                 className="match__flag"/>
                                            {this.state.teamsList[match.away.teamId].name}
                                            <small className="ml-1 mr-1 text-muted">(
                                                {match.away.teamAttack}:{match.away.teamMidfield}:{match.away.teamDefense})
                                            </small>
                                        </th>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
