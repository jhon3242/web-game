import ReviewList from "./ReviewList";
import items from "../mock.json"
function App(){
    return (<>
        <ReviewList items={items} />
    </>);
}

export default App;