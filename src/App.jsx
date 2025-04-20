import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-full">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
