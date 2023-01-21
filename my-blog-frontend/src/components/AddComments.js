import { useState } from "react";

const AddComment = ({ addComment }) => {
  const clearComment = {
    commentText: "",
  };
  const [comment, setComment] = useState(clearComment);
  const pushComment = () => {
    if (comment.commentText) {
      addComment(comment);
      setComment(clearComment);
    } else {
      alert("Please fill the form before submit.");
    }
  };
  return (
    <div className="flex flex-col">
      <label>Comment:</label>
      <textarea
        rows="4"
        cols="50"
        className="border-2 border-black rounded w-96"
        value={comment.commentText}
        onChange={(event) => setComment({ commentText: event.target.value })}
      />
      <button
        className="mt-2 border-2 border-black rounded w-fit"
        onClick={pushComment}
      >
        Submit
      </button>
    </div>
  );
};
export default AddComment;
