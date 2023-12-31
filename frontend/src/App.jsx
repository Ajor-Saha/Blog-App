
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comment from "./pages/admin/screens/comments/Comment";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";


function App() {
  

  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}  />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comment />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}
import LoginPage from "./pages/login/LoginPage";

export default App;
