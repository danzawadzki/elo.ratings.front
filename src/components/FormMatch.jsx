import {Component} from "react";
import * as React from 'react';
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";

class FormMatch extends Component {
    constructor(props) {
        super(props)

        this.submitMatch = this.submitMatch.bind(this);
    };

    submitMatch(e) {
        e.preventDefault();
        try {
            const {homeTeamId, homePlayerId, homeGoals, homeTeamAttack, homeTeamDefense, homeTeamMidfield, awayTeamId, awayPlayerId = 0, awayGoals = 0, awayTeamAttack, awayTeamDefense, awayTeamMidfield} = this.state;

            const today = new Date().toISOString().slice(0, 10);
            const data = {
                date: today,
                home: {
                    teamId: homeTeamId,
                    playerId: homePlayerId,
                    goals: homeGoals,
                    teamAttack: homeTeamAttack,
                    teamDefense: homeTeamDefense,
                    teamMidfield: homeTeamMidfield
                },
                away: {
                    teamId: awayTeamId,
                    playerId: awayPlayerId,
                    goals: awayGoals,
                    teamAttack: awayTeamAttack,
                    teamDefense: awayTeamDefense,
                    teamMidfield: awayTeamMidfield
                }
            };

            if (homeTeamId === awayTeamId) {
                return alert("Choose different teams.");
            }
            else if (homePlayerId === awayTeamId) {
                return alert("Choose different players.");
            } else if (homeGoals < 0 || awayGoals < 0) {
                return alert("Type correct result");
            } else if (100 < homeTeamAttack || homeTeamAttack < 50 || 100 < homeTeamMidfield || homeTeamMidfield < 50 || 100 < homeTeamDefense || homeTeamDefense < 50 || 100 < awayTeamAttack || awayTeamAttack < 50 || 100 < awayTeamMidfield || awayTeamMidfield < 50 || 100 < awayTeamDefense || awayTeamDefense < 50) {
                return alert("Type team stats in the range of 50-100.")
            }

            fetch('http://176.119.51.91:5000/', {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json());
            window.location.reload();
        } catch (e) {
            alert("Fill all the fields.")
        }
    };

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value})
    };

    render() {
        return (
            <form onSubmit={this.submitMatch}>
                <div className="form-row">

                    <PlayerLeft handleChange={this.handleChange} playersList={this.props.playersList}
                                teams={this.props.teams}/>
                    <PlayerRight handleChange={this.handleChange} playersList={this.props.playersList}
                                 teams={this.props.teams}/>
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary pr-4 pl-4 mt-3 mb-3">Submit match</button>
                </div>
            </form>
        )
    }
}

export default FormMatch;