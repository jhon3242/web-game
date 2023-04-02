import "./Rating.css"

const RATINGS = [1,2,3,4,5];

function Star({selected = false}) {
    const className = `Rating-star ${selected ? "selected" : ""}`
    return (
        <div className={className}>★</div>
    )
}

function Rating({value}) {
    return (
        <>
            {RATINGS.map((rating) => (
                <Star key={rating} selected={value >= rating}/>
            ))}
        </>
    )
}

export default Rating;