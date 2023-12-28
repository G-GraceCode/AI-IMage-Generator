import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import { Home, CreatePost, Signup } from "./pages/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <main className="sm:p-8 px-4 py-8 w-full  bg-[#000] ">
        <Header />
        {/*bg-[#f9fafe] */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
