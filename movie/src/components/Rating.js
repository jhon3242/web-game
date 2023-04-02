import "./Rating.css";

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, rating, onSelect, onHover, onMouseOut }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;

  const handleClick = onSelect ? () => onSelect(rating) : undefined;

  const handleMouseOver = onHover ? () => onHover(rating) : undefined;

  return (
    <span
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={onMouseOut}
    >
      ★
    </span>
  );
}

function Rating({ value = 0, onSelect, onHover, onMouseOut }) {
  return (
    <>
      {RATINGS.map((rating) => (
        <Star
          key={rating}
          rating={rating}
          selected={value >= rating}
          onSelect={onSelect}
          onHover={onHover}
          onMouseOut={onMouseOut}
        />
      ))}
    </>
  );
}

export default Rating;
