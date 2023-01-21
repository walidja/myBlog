import { useEffect, useRef, useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/AddComments";
import Comments from "../components/Comments";
import { getArticle, updateUpvotes, addComment } from "../data/articlesData";
import useUser from "../hooks/useUser";
const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({
    name: "",
    upvotes: 0,
    content: [],
    comments: [],
  });
  const [user] = useUser();
  const headers = useRef({});
  const updateArticle = (data) => {
    console.log("update article!");
    setArticle(data);
  };
  useEffect(() => {
    const initToken = async () => {
      const token = user && (await user.getIdToken());
      headers.current = token ? { authToken: token } : {};
      getArticle(articleId, headers.current).then(updateArticle);
    };
    initToken();
  }, [articleId, user]);
  return (
    <div className="flex flex-col items-center">
      <div className="w-9/12">
        <h1 className="font-bold text-center"> {article.title} </h1>
        <div className="flex items-center">
          {user &&
            (article.canUpvote ? (
              <button
                className="rounded-md border-2 inline-block"
                onClick={() => {
                  updateUpvotes(articleId, headers.current).then(updateArticle);
                }}
              >
                <BiUpvote color="blue" size={30} />
              </button>
            ) : (
              <span>Already upvoted</span>
            ))}
          {!user && (
            <Link to="/login" className="hover:underline font-semibold">
              Login to upvote the article.
            </Link>
          )}
          <span className="m-2">
            This article has {article.upvotes} upvotes
          </span>
        </div>
        {article.content.map((paragraph, index) => (
          <p key={index} className="p-2">
            {paragraph}
          </p>
        ))}
        {user && (
          <AddComment
            user={user}
            addComment={(comment) =>
              addComment(articleId, comment, headers.current).then(
                updateArticle
              )
            }
          />
        )}
        {!user && (
          <Link to="/login" className="hover:underline font-semibold">
            Login to comments to the article.
          </Link>
        )}
        <Comments comments={article.comments} />
      </div>
    </div>
  );
};
export default ArticlePage;
