import AuthLayout from "@src/components/AuthLayout";
import Layout from "@src/components/Layout";
import NonAuthLayout from "@src/components/NonAuthLayout";
import MyPage from "@src/pages/auth/MyPage";
import Home from "@src/pages/Home";
import Login from "@src/pages/non-auth/Login";
import SignUp from "@src/pages/non-auth/SignUp";
import TodoList from "@src/pages/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/todoList" element={<TodoList />} />
        </Route>

        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/user/:userId" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
