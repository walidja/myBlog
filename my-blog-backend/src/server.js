import fs from "fs";
import express from "express";
import { addRoutes } from "./router/router.js";
import admin from "firebase-admin";
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const credentials = JSON.parse(
  fs.readFileSync("my-react-blog-credential.json")
);

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;
  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      res.send(400);
    }
  }
  req.user = req.user || {};
  next();
});

addRoutes(app);

app.listen(4000, () => {
  console.log("Starting server at port 4000...");
});
