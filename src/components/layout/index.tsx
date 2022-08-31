import GamePositions from "../gridTamplate";
import * as C from "./style";

function Layout() {
    return (
        <>
            <C.Container>
                <C.WBar top='33%' />
                <C.WBar bottom='33%' />
                <C.HBar left='33%' />
                <C.HBar right='33%' />
                <GamePositions />
            </C.Container>
        </>
    );
}
export default Layout;
