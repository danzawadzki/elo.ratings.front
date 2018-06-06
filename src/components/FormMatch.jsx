import * as React from "react";
import { Component } from "react";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";
import "whatwg-fetch";

class FormMatch extends Component {
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    handleChangeDropdown = event => {
        this.handleChange(event);

        this.setState({
            [event.target.id + "Stats"] : this.props.teams[event.target.value]
        })
    };

    constructor(props) {
        super(props);

        this.state = {
            homeTeamIdStats: {},
            awayTeamIdStats: {}
        }

        this.submitMatch = this.submitMatch.bind(this);
    }

    submitMatch(e) {
        e.preventDefault();
        try {
            const {
                homeTeamId,
                homePlayerId,
                homeGoals = 0,
                homeTeamIdStats,
                awayTeamId,
                awayPlayerId,
                awayGoals = 0,
                awayTeamIdStats
            } = this.state;

            const today = new Date().toISOString().slice(0, 10);
            const data = {
                date: today,
                home: {
                    teamId: homeTeamId,
                    playerId: homePlayerId,
                    goals: homeGoals,
                    teamAttack: homeTeamIdStats.attack_ovr,
                    teamDefense: homeTeamIdStats.defense_ovr,
                    teamMidfield: homeTeamIdStats.midfield_ovr
                },
                away: {
                    teamId: awayTeamId,
                    playerId: awayPlayerId,
                    goals: awayGoals,
                    teamAttack: awayTeamIdStats.attack_ovr,
                    teamDefense: awayTeamIdStats.defense_ovr,
                    teamMidfield: awayTeamIdStats.midfield_ovr
                }
            };

            if (homeTeamId === awayTeamId) {
                return alert("Choose different teams.");
            } else if (homePlayerId === awayPlayerId) {
                return alert("Choose different players.");
            } else if (homeGoals < 0 || awayGoals < 0) {
                return alert("Type correct result");
            }
            // else if (
            //     100 < homeTeamAttack ||
            //     homeTeamAttack < 50 ||
            //     !homeTeamAttack ||
            //     (100 < homeTeamMidfield ||
            //         homeTeamMidfield < 50 ||
            //         !homeTeamMidfield) ||
            //     (100 < homeTeamDefense ||
            //         homeTeamDefense < 50 ||
            //         !homeTeamDefense) ||
            //     (100 < awayTeamAttack ||
            //         awayTeamAttack < 50 ||
            //         !awayTeamAttack) ||
            //     (100 < awayTeamMidfield ||
            //         awayTeamMidfield < 50 ||
            //         !awayTeamMidfield) ||
            //     (100 < awayTeamDefense ||
            //         awayTeamDefense < 50 ||
            //         !awayTeamDefense)
            // ) {
            //     return alert("Type team stats in the range of 50-100.");
            // }
            else {
                fetch("http://176.119.51.91:5000/", {
                    body: JSON.stringify(data),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: "cors"
                }).then(res => {
                    res.json();
                    window.location.reload();
                });
            }
        } catch (e) {
            alert("Fill all the fields.");
        }
    }

    render() {
        return (
            <form onSubmit={this.submitMatch}>
                <div className="form-row">
                    <PlayerLeft
                        handleChangeDropdown={this.handleChangeDropdown}
                        handleChange={this.handleChange}
                        playersList={this.props.playersList}
                        teams={this.props.teams}
                        teamStats={this.state.homeTeamIdStats}
                    />
                    <PlayerRight
                        handleChangeDropdown={this.handleChangeDropdown}
                        handleChange={this.handleChange}
                        playersList={this.props.playersList}
                        teams={this.props.teams}
                        teamStats={this.state.awayTeamIdStats}
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-primary pr-4 pl-4 mt-3 mb-3"
                    >
                        Submit match
                    </button>
                </div>
            </form>
        );
    }
}

export default FormMatch;
