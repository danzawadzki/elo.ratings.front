import * as React from "react";

const PlayerLeft = ({
    playersList,
    teams,
    teamStats,
    handleChange,
    handleChangeDropdown
}) => (
    <div className="col-6 matchForm__player">
        <h4 className="col-12 text-center">Player 1</h4>
        <div className="row">
            <div className="col-9 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Home Player
                </small>
                <select
                    id="homePlayerId"
                    onChange={handleChange}
                    className="form-control">
                    <option selected>Choose...</option>
                    {Object.keys(playersList).map(player => (
                        <option value={player}>
                            {playersList[player].name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-3 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Goals
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="homeGoals"
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-6 p-1">
                <small id="emailHelp" className="form-text text-muted">
                    Home Team
                </small>
                <select
                    id="homeTeamId"
                    onChange={handleChangeDropdown}
                    className="form-control">
                    <option selected>Choose...</option>
                    {Object.keys(teams).map(team => (
                        <option value={team}>{teams[team].name}</option>
                    ))}
                </select>
            </div>
            <div className="col-2 p-1">
                <small id="home" className="form-text text-muted">
                    Attack
                </small>
                <input
                    type="number"
                    className="form-control"
                    id="homeTeamAttack"
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
                    id="homeTeamMidfield"
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
                    id="homeTeamDefense"
                    onChange={handleChange}
                    placeholder="0"
                    value={teamStats.defense_ovr || 0}
                />
            </div>
        </div>
    </div>
);

export default PlayerLeft;
