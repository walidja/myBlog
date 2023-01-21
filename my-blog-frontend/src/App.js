import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticlesListPage";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
