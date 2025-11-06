import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import Wishlist from "./pages/wishlist";

const App: React.FC = () => {
  return (
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wishlist />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
    </Providers>
  );
};

export default App;