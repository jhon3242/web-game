import Rating from "./Rating";
import { useState } from "react";

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => {
    onChange(name, nextValue);
  };
  const handleMouseOut = () => {
    setRating(value);
  };

  return (
    <Rating
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
