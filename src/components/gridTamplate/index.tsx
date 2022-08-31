import Cell from "../Cell";
import * as C from "./style";
import { useState } from "react";

function GamePositions() {
    const [player, setPlayer] = useState(false);

    return (
        <C.Container>
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
            <Cell player={player} setPlayer={setPlayer} />
        </C.Container>
    );
}
export default GamePositions;
