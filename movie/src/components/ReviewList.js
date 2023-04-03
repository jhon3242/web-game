import "./ReviewList.css";
import Rating from "./Rating";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${
    date.getDate() + 1
  } `;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => onDelete(item.id);

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img
        className="ReviewListItem-img"
        src={item.imgUrl}
        alt={item.title}
      ></img>
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </div>
  );
}


function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  const [editingId, setEditingId] = useState(null);

  const handleCancel = () => {
      setEditingId(null);
      debugger;
  }

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          const { id, imgUrl, title, rating, content } = item;
          const initialValue = { title, rating, content };

          const handleSubmit = (formData) => onUpdate(id, formData);

          const handleSubmitSuccess = (review) => {
              onUpdateSuccess(review)
              setEditingId(null);
          }

          return (
            <li key={item.id}>
              <ReviewForm
                initialState={initialValue}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
              <input />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
            <input />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
