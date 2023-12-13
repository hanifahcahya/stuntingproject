import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/homepages/index";
import Footer from "./layouts/footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
