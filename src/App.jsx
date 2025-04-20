import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedDiv from "./components/AnimatedDiv";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-full">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <AnimatedDiv>
                <Home />
              </AnimatedDiv>
            }
          />
          <Route
            path="/products"
            element={
              <AnimatedDiv>
                <Products />
              </AnimatedDiv>
            }
          />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
