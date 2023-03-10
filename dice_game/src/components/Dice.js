import diceWhite01 from "../asset/diceWhite01.svg"
import diceBlack01 from "../asset/diceBlack01.svg"
import diceWhite02 from "../asset/diceWhite02.svg"
import diceBlack02 from "../asset/diceBlack02.svg"
import diceWhite03 from "../asset/diceWhite03.svg"
import diceBlack03 from "../asset/diceBlack03.svg"
import diceWhite04 from "../asset/diceWhite04.svg"
import diceBlack04 from "../asset/diceBlack04.svg"
import diceWhite05 from "../asset/diceWhite05.svg"
import diceBlack05 from "../asset/diceBlack05.svg"
import diceWhite06 from "../asset/diceWhite06.svg"
import diceBlack06 from "../asset/diceBlack06.svg"

const DICE_IMAGES = {
    white : [diceWhite01, diceWhite02, diceWhite03, diceWhite04, diceWhite05, diceWhite06],
    black : [diceBlack01, diceBlack02, diceBlack03, diceBlack04, diceBlack05, diceBlack06]
}
function Dice({color, num}){
    const src = DICE_IMAGES[color][num - 1];
    const alt = `${color} ${num};`
    return (
        <img style={{width:"400px", height:"280px"}} src={src} alt={alt}/>
    )
}

export default Dice;