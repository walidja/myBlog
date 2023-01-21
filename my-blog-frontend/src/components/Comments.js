const Comments = ({ comments }) => {
  return (
    <div>
      <h3 className="text-xl font-bold border-t-2 my-2">Comments:</h3>
      {comments.map((comment, index) => (
        <div className="border-b-2 my-1" key={comment + index}>
          <h4 className="font-semibold">{comment.commentBy}</h4>
          <p> {comment.commentText}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
