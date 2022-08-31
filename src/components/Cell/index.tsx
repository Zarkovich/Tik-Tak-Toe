import * as C from "./style";
import { useEffect, useState } from "react";
import { BallPlayer, XPlayer } from "../Players/style";

interface Props {
    player: boolean;
    setPlayer: (m: boolean) => void;
}

function Cell({ player, setPlayer }: Props) {
    const [playerCell, setPlayerCell] = useState<boolean | null>();

    const [mudar, setMudar] = useState(true);

    function handleMudar() {
        setMudar(false);
        if (mudar) setPlayerCell(player);
    }

    useEffect(() => {
        setPlayer(!player);
    }, [mudar]);

    return (
        <C.Cell selected={!mudar} onClick={handleMudar}>
            {!mudar && (playerCell ? <XPlayer /> : <BallPlayer />)}
        </C.Cell>
    );
}
export default Cell;
