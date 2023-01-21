import { Link } from "react-router-dom";
const ArticlesList = ({ articles }) => {
  return (
    <div className="flex flex-col items-center">
      <ul className="divide-y divide-slate-200 w-9/12">
        {articles.map((article, index) => (
          <li key={index}>
            <Link to={`/articles/${article.name}`}>
              <h3 className="h-3 font-bold m-2">{article.title}</h3>
              <p className=" pl-3 mt-7">
                {article.content[0].substring(0, 150)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesList;
