import * as React from 'react';

const PlayersList = ({playersList}) => (
    <div className="row">
        <h3 className="text-center col-12 mb-4 mt-3">Players List</h3>
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
                {Object.keys(playersList).map(player => (
                    <tr key={player}>
                        <th scope="row">{player}</th>
                        <td>{playersList[player].name}</td>
                        <td>{playersList[player].value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
)

export default PlayersList;
