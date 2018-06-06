import * as React from "react";

const MatchesList = ({ matches, teams, playersList }) => (
    <div className="row">
        <h3 className="text-center col-12 mb-4 mt-3">Latest Matches</h3>
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
                    {(matches.status === "loaded" && matches.list.length) >
                    0 ? (
                        matches.list.reverse().map((match, i) => (
                            <tr key={"match-" + i}>
                                <td scope="row" className="align-middle">
                                    <img
                                        src={teams[match.home.teamId].flag_url}
                                        alt="flag"
                                        className="match__flag"
                                    />
                                    {teams[match.home.teamId].name}
                                    <small className="ml-1 mr-1 text-muted">
                                        (
                                        {match.home.teamAttack}:{
                                            match.home.teamMidfield
                                        }:{match.home.teamDefense})
                                    </small>
                                </td>
                                <td className="align-middle">
                                    {playersList[match.home.playerId].name}
                                </td>
                                <td className="align-middle">
                                    {match.home.goals} : {match.away.goals}
                                    <br />
                                    <small className="text-muted">
                                        {Math.abs(match.ratingDelta.toFixed(3))}
                                    </small>
                                </td>
                                <td className="align-middle">
                                    {playersList[match.away.playerId].name}
                                </td>
                                <td className="align-middle">
                                    <img
                                        src={teams[match.away.teamId].flag_url}
                                        alt="flag"
                                        className="match__flag"
                                    />
                                    {teams[match.away.teamId].name}
                                    <small className="ml-1 mr-1 text-muted">
                                        (
                                        {match.away.teamAttack}:{
                                            match.away.teamMidfield
                                        }:{match.away.teamDefense})
                                    </small>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

export default MatchesList;
