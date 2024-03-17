import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

//pages
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import NotFoundPage from "./pages/not-found";

// containers
import Header from "./containers/header";
import Footer from "./containers/footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
