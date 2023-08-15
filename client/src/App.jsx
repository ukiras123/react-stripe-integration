import * as React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/*" element={<Navigate to={`/`} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
