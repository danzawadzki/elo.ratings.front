import * as React from 'react';

const MatchesList = ({matches, teams, playersList}) => (
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
                {(matches.status === "loaded" && matches.list.length) > 0 ? matches.list.map((match, i) => (
                    <tr key={'match-' + i}>
                        <th scope="row">
                            <img src={teams[match.home.teamId].flag_url} alt="flag"
                                 className="match__flag"/>
                            {teams[match.home.teamId].name}
                            <small className="ml-1 mr-1 text-muted">(
                                {match.home.teamAttack}:{match.home.teamMidfield}:{match.home.teamDefense})
                            </small>
                        </th>
                        <td>{playersList[match.home.playerId].name}</td>
                        <td>{match.home.goals} : {match.away.goals}</td>
                        <td>{playersList[match.away.playerId].name}</td>
                        <th>
                            <img src={teams[match.away.teamId].flag_url} alt="flag"
                                 className="match__flag"/>
                            {teams[match.away.teamId].name}
                            <small className="ml-1 mr-1 text-muted">(
                                {match.away.teamAttack}:{match.away.teamMidfield}:{match.away.teamDefense})
                            </small>
                        </th>
                    </tr>
                )) : "Loading..."}
                </tbody>
            </table>
        </div>
    </div>
);

export default MatchesList;