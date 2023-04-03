import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";
import Rating from "./Rating";
import RatingInput from "./RatingInput";

const INITIAL_STATE = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};
function ReviewForm({
  initialState = INITIAL_STATE,
  initialPreview,
  onSubmit,
  onSubmitSuccess,
  onCancel,
}) {
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);

  const handleChange = (name, value) => {
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("rating", values.rating);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;
    try {
      setIsSubmitting(true);
      result = await onSubmit(formData);
    } catch (err) {
      setSubmittingError(err);
    } finally {
      setIsSubmitting(false);
    }
    const { review } = result;
    setValues(INITIAL_STATE);
    onSubmitSuccess(review);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <div>{values.title}</div>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <RatingInput
        name={"rating"}
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      <button onClick={onCancel}>취소</button>
      {submittingError?.message && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
