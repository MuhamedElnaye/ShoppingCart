import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Store from "./component/Store";
import "./App.css";
import ShoppingCardProvider from "./context/ShoppingCardContext";
const App = () => {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
};

export default App;
