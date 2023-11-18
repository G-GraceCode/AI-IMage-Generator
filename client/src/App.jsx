import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import { Home, CreatePost } from "./pages/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
