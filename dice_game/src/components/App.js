import Board from "./Borad";
import Buttion from "./Button";
import {useState} from "react";

function random(n) {
    return Math.ceil(Math.random() * n);
}
function App(){

    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);

    const handleRollClick = () => {
        let nextMyNum = random(6);
        let nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    }

    const handleRollClear = () => {
        setMyHistory([]);
        setOtherHistory([]);
    }

    return (
        <>
            <div>
                <Buttion onClick={handleRollClick}>던지기</Buttion>
                <Buttion onClick={handleRollClear}>처음부터</Buttion>
            </div>

            <Board name={"나"} color={"white"} history={myHistory} />
            <Board name={"상대"} color={"black"} history={otherHistory} />
        </>
)
}

export default App;