import ReviewList from "./ReviewList";
import getReviews from "../api";
import {useEffect, useState} from "react";
import ReviewForm from "./ReviewForm";
import Test from "./test";
import FileInput from "./FileInput";

const LIMIT = 6;


function App(){
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("id");
    const [offset, setOffset] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);

    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleNewestClick = () => setOrder("createdAt");
    const handleRatingClick = () => setOrder("rating");
    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    }
    const handleLoad = async (option) => {
        let result;
        try {
            setIsLoading(true);
            setLoadingError(null);
            result = await getReviews(option);
        } catch (err) {
            setLoadingError(err);
            return;
        } finally {
            setIsLoading(false);
        }
        const { reviews, paging } = result;
        if (option.offset === 0) {
            setItems(reviews);
        } else {
            setItems([...items, ...reviews])
        }
        setHasNext(paging.hasNext);
        setOffset(option.offset + reviews.length);
    }

    const handleLoadMore = () => {
        handleLoad({order, offset, limit:LIMIT});
    }

    useEffect(() => {
        handleLoad({order, offset:0, limit:LIMIT});
    }, [order]);

    return (<>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleRatingClick}>평점순</button>
        <ReviewForm />
        <ReviewList items={sortedItems} onDelete={handleDelete} />
        {hasNext &&  <button disabled={isLoading} onClick={handleLoadMore}>더보기</button>}
        {loadingError?.message && <p>{loadingError.message}</p>}
    </>);
}

export default App;