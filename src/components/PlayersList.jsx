import * as React from "react";

const PlayersList = ({ playersList }) => {
    let playersArray = [];

    Object.keys(playersList).map(player => {
        playersArray = [
            ...playersArray,
            {
                id: player,
                name: playersList[player].name,
                value: playersList[player].value,
                form: playersList[player].form,
                games: playersList[player].games,
                won: playersList[player].won,
                draw: playersList[player].draw,
                lost: playersList[player].lost,
                goalsScored: playersList[player].goalsScored,
                goalsConceded: playersList[player].goalsConceded
            }
        ];
    });

    playersArray.sort((a, b) => {
        if (a.value < b.value) {
            return 1;
        } else {
            return -1;
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
                            <th scope="col">games</th>
                            <th scope="col">won</th>
                            <th scope="col">draw</th>
                            <th scope="col">lost</th>
                            <th scope="col">scored</th>
                            <th scope="col">conceded</th>
                            <th scope="col">ratio</th>
                            <th scope="col">form</th>
                            <th scope="col">rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersArray.map((player, i) => (
                            <tr key={player.id}>
                                <th scope="row">{i + 1}</th>
                                <td>{player.name}</td>
                                <td>{player.games}</td>
                                <td>{player.won}</td>
                                <td>{player.draw}</td>
                                <td>{player.lost}</td>
                                <td>{player.goalsScored}</td>
                                <td>{player.goalsConceded}</td>
                                <td>
                                    {player.goalsScored - player.goalsConceded}
                                </td>
                                <td>
                                    {player.form
                                        .slice(-5)
                                        .reverse()
                                        .join(", ")}
                                </td>
                                <td>{player.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlayersList;
