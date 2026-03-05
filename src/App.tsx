import React from "react";
import "./App.css";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Providers from "./provider";
import List from "./pages/list";
import ProductDescription from "./pages/productDescription";
import AppRemoteRouterSync from "./AppRemoteRouterSync";

const App: React.FC = () => {
  const currentPath = window.location.pathname;
  const isValidRemotePath = currentPath === "/" || currentPath.startsWith("/product");
  const initialPath = isValidRemotePath ? currentPath : "/";

  console.log("🛍️ Products App mounting with initial path:", initialPath);

  return (
    <Providers>
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRemoteRouterSync />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/product/:slug" element={<ProductDescription />} />
        </Routes>
      </MemoryRouter>
    </Providers>
  );
};

export default App;