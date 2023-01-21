import { db, connectDB } from "./DBConnection.js";

class Article {
  constructor() {
    connectDB(() => {
      console.log("Database was connected successfully");
      this.articles = db.collection("articles");
    });
  }
  getArticles = async (req, res) => {
    const articles = [];
    await this.articles.find({}).forEach((article) => {
      articles.push(article);
    });
    if (articles) {
      res.json(articles);
    } else {
      res.sendStatus(404);
    }
  };
  getArticle = async (req, res) => {
    let name = req.params.name;
    const { uid } = req.user;
    const article = await this.articles.findOne({ name });
    if (article) {
      let articleUids = article.articleUids || [];
      article.canUpvote = uid && !articleUids.includes(uid);
      res.json(article);
    } else {
      res.sendStatus(404);
    }
  };

  updateUpvotes = async (req, res) => {
    const { name } = req.params;
    const { uid } = req.user;

    const article = await this.articles.findOne({ name });
    if (article) {
      let articleUids = article.articleUids || [];
      let canUpvote = uid && !articleUids.includes(uid);
      if (canUpvote) {
        await this.articles.updateOne(
          { name },
          {
            $inc: { upvotes: 1 },
            $push: { articleUids: uid },
            $set: { canUpvote: false },
          }
        );
      } else {
        console.log("Already upvoted!!");
      }
      const updatedArticle = await this.articles.findOne({ name });
      res.send(updatedArticle);
    } else {
      res.sendStatus(404);
    }
  };

  addComment = async (req, res) => {
    const { name } = req.params;
    const { email } = req.user;
    const comment = req.body;

    await this.articles.updateOne(
      { name },
      {
        $push: {
          comments: { commentBy: email, commentText: comment.commentText },
        },
      }
    );
    const article = await this.articles.findOne({ name });
    if (article) {
      res.send(article);
    } else {
      res.sendStatus(404);
    }
  };
}

export default Article;
