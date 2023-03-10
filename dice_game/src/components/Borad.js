import Dice from "./Dice"
function Board({name, color, history}){

    let num = history[history.length - 1] || 1;
    let sum = history.reduce((acc, num) => acc + num, 0);
    return (
        <>
            <div>
                <h2>{name}</h2>
                <Dice color={color} num={num} />
                <h2>총점</h2>
                <p>{sum}</p>
                <h2>총점</h2>
                <p>{history.join(", ")}</p>
            </div>
        </>
    )
}

export default Board;