import Board from "./Board";
import Buttion from "./Button";
import {useState} from "react";
import "./App.css"
import Logo from "../asset/logo.png"

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
        <div className="App">
            <div>
                <img className="App-logo" src={Logo} alt="주사위게임 로고"/>
                <h1 className="App-title">주사위게임</h1>
                <div>
                    <Buttion className="Button blue App-button" onClick={handleRollClick}>던지기</Buttion>
                    <Buttion className="Button red App-button" onClick={handleRollClear}>처음부터</Buttion>
                </div>
            </div>
            <div className="App-boards">
                <Board className="Board App-board" name={"나"} color={"blue"} history={myHistory} />
                <Board className="Board App-board" name={"상대"} color={"red"} history={otherHistory} />
            </div>
        </div>
)
}

export default App;