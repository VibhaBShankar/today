import React from "react";

const Card = ({
  id,
  title,
  body,
  onDelete,
}) => {
  return (
    <div>
      <h2>{`Post #${id}`}</h2>

      <h3>{title}</h3>

      <p>{body}</p>

      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;