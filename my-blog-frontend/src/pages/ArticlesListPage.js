import { useEffect, useState } from "react";
import ArticlesList from "../components/ArticlesList";
import { getArticles } from "../data/articlesData";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => setArticles(data));
  }, []);
  return (
    <>
      <h1 className="font-extrabold p-2 text-center"> Articles </h1>
      {articles && <ArticlesList articles={articles} />}
      {!articles && <h1>No articles were found!!</h1>}
    </>
  );
};
export default ArticleListPage;
