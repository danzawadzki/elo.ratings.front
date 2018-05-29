import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        //Players list
        this.state = {
            playersList: [
                {id: 1, name: "Mikołaj Retyk", value: 1500},
                {id: 2, name: "Mateusz Kamola", value: 1500},
                {id: 3, name: "Łukasz Margas", value: 1500},
                {id: 4, name: "Piotr Podolski", value: 1500},
                {id: 5, name: "Daniel Zawadzki", value: 1500},
                {id: 6, name: "Przemysław Siemaszko", value: 1500},
                {id: 7, name: "Jakub Gajewski", value: 1500}
            ],

            matchesList: [
                {}
            ]
        }
    }
  render() {
    return (
      <div className="App">
        <div className="container">
          {/*<img src='http://www.cloudtechnologies.pl/img/cloudtechnologies.png' alt="logo" />*/}
            <h1 className="display-4 m-5">Office Elo Soccer Rating</h1>

            <form>
                <div className="form-row">

                    {/* Home Player */}
                    <div className="col-6 matchForm__player">
                        <h4>Player 1</h4>
                        <div className="row">
                            <div className="col-9 p-1">
                                <small id="emailHelp" className="form-text text-muted">Home Player</small>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    {this.state.playersList.map(player =>
                                        <option value={player.id}>{player.id} - {player.name}</option>)}
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
                        <h4>Player 2</h4>
                        <div className="row">
                            <div className="col-3 p-1">
                                <small id="emailHelp" className="form-text text-muted">Goals</small>
                                <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                            </div>

                            <div className="col-9 p-1">
                                <small id="emailHelp" className="form-text text-muted">Player</small>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    {this.state.playersList.map(player =>
                                        <option value={player.id}>{player.id} - {player.name}</option>)}
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


                <button type="submit" className="btn btn-primary pr-4 pl-4 mt-3 mb-3">Submit match</button>
            </form>

          <table className="table table-bordered table-hover">
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">rating</th>
              </tr>
              </thead>
              <tbody>
              {this.state.playersList.map(player => (
                  <tr key={player.id}>
                      <th scope="row">{player.id}</th>
                      <td>{player.name}</td>
                      <td>{player.value}</td>
                  </tr>
              ))}
              </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default App;
