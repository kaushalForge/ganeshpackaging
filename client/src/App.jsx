// src/App.jsx
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ScrollToTop from "./components/Helper/ScrollToTop";
import Footer from "./components/common/Footer";

// Regular imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";

// Lazy-loaded component
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

// Loading component
const LoadingScreen = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
    <div className="w-16 h-16 border-4 border-t-orange-500 border-gray-200 rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
