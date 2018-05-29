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
                    <div className="form-group col-md-2">
                        <label htmlFor="inputState">Home Team</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputState">Home Player</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            {this.state.playersList.map(player =>
                                <option value={player.id}>{player.id} - {player.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="inputAddress">Score</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                    </div>
                    <div className="form-group col-md-1">
                        <label htmlFor="inputAddress">Score</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="0"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputState">Guest Player</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            {this.state.playersList.map(player =>
                                <option value={player.id}>{player.id} - {player.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputState">Guest Team</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary pr-4 pl-4">Submit match</button>
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
