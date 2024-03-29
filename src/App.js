import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

//pages
import HomePage from "./pages/home";
import SignInPage from "./pages/singin";
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
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
