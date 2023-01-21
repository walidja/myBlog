import Article from "../database/articlesDB.js";

const articlesDB = new Article();
export const addRoutes = (app) => {
  app.route("/api/articles/").get(articlesDB.getArticles);
  app.route("/api/articles/:name").get(articlesDB.getArticle);
  app.route("/api/articles/:name/upvotes").put(articlesDB.updateUpvotes);
  app.route("/api/articles/:name/comments").post(articlesDB.addComment);
};
