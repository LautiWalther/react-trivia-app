import Menu from "./Menu";
import Game from "./Game";
import { useData } from "./context"

const Hub = () => {
    
    const data = useData();

    return (
        <>
            {data.playing ? <Game /> : <Menu />}
        </>
    )
}

export default Hub;