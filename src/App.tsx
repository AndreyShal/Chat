import React, { useEffect } from "react";
import { UsersList } from "./components/UsersList";
import { store } from "./redux/store";
import "./App.css";
import { PostsList } from "./components/PostsList";
import { AddPost } from "./components/AddPost";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Chat from "./Pages/Chat";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<Login />} />
      <Route path="chat" element={<Chat />} />
      <Route path="*" element={<Login />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    // console.log(store.getState());
  }, [store]);

  // return (
  //   <div className="App">
  //   </div>
  // );

  return <RouterProvider router={router} />;
}

export default App;
// crypto.randomUUID()
