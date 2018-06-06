import * as React from "react";

const PlayerRight = ({ playersList, teams, teamStats, handleChange, handleChangeDropdown }) => (
    <div className="col-6 matchForm__player">
        <div className="row">
            <h4 className="col-12 text-center">Player 2</h4>
        </div>
        <div className="row">
            <div className="col-3 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Goals
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="awayGoals"
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>

            <div className="col-9 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Player
                </small>
                <select
                    id="awayPlayerId"
                    className="form-control"
                    onChange={handleChange}>
                    <option selected>Choose...</option>
                    {Object.keys(playersList).map(player => (
                        <option value={player}>
                            {playersList[player].name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="col-6 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Team
                </small>
                <select
                    id="awayTeamId"
                    onChange={handleChangeDropdown}
                    className="form-control">
                    <option selected>Choose...</option>
                    {Object.keys(teams).map(team => (
                        <option value={team}>{teams[team].name}</option>
                    ))}
                </select>
            </div>
            <div className="col-2 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Attack
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="awayTeamAttack"
                    onChange={handleChange}
                    placeholder="0"
                    value={teamStats.attack_ovr || 0}
                />
            </div>
            <div className="col-2 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Midfield
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="awayTeamMidfield"
                    onChange={handleChange}
                    placeholder="0"
                    value={teamStats.midfield_ovr || 0}
                />
            </div>
            <div className="col-2 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Defense
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="awayTeamDefense"
                    onChange={handleChange}
                    placeholder="0"
                    value={teamStats.defense_ovr || 0}
                />
            </div>
        </div>
    </div>
);

export default PlayerRight;
