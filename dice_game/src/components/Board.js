import Dice from "./Dice"
import "./Board.css"
import "./App.css"
function Board({name, color, history, className}){

    let num = history[history.length - 1] || 1;
    let sum = history.reduce((acc, num) => acc + num, 0);
    return (
        <div className={className}>
            <div>
                <h2 className="Board-heading">{name}</h2>
                <Dice color={color} num={num} />
                <h2 className="Board-heading">총점</h2>
                <p>{sum}</p>
                <h2 className="Board-heading">총점</h2>
                <p>{history.join(", ")}</p>
            </div>
        </div>
    )
}

export default Board;