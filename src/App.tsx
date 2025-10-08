import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import List from "./pages/list";
import ProductDescription from "./pages/ProductDescription";

const App: React.FC = () => {
  return (
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/product/:slug" element={<ProductDescription />} />
      </Routes>
    </BrowserRouter>
    </Providers>
  );
};

export default App;