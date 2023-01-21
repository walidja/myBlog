import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
const firebaseConfig = {
  apiKey: "AIzaSyBeXhZ6MB2h9Ej3wijDEat4CUk6ar7E-u0",
  authDomain: "my-react-blog-e895b.firebaseapp.com",
  projectId: "my-react-blog-e895b",
  storageBucket: "my-react-blog-e895b.appspot.com",
  messagingSenderId: "365577689560",
  appId: "1:365577689560:web:bd9399d0be439223d63aad",
};
// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
