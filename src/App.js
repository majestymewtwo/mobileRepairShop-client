import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Repairs from "./pages/Repairs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./pages/Book";
import Status from "./pages/Status";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/book' element={<Book />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/repairs' element={<Repairs />}></Route>
          <Route path='/status' element={<Status />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
