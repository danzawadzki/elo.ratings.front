import * as React from 'react';

const PlayersList = ({playersList}) => {
    let playersArray = [];

    Object.keys(playersList).map(player => {
        playersArray = [...playersArray, {
            id: player,
            name: playersList[player].name,
            value: playersList[player].value
        }]
    });

    playersArray.sort((a, b) => {
        if (a.value < b.value) {
            return 1;
        } else {
            return -1
        }
    });

    return (
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
                    {playersArray.map((player, i) => <tr key={player.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{player.name}</td>
                        <td>{player.value}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PlayersList;
