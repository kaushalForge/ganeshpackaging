"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center lg:justify-start px-4 lg:px-20 py-18 lg:pt-28">
      {/* Hero Content */}
      <div className="max-w-2xl flex flex-col justify-center gap-6 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Pure, Natural & Additive-Free Food Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-lg"
        >
          High-quality ingredients sourced directly from trusted farms. Healthy,
          fresh, and ready for your kitchen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          <a
            href="/collection"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 font-medium transition-all transform hover:scale-105"
          >
            Shop Now
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-100 font-medium transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Optional Animated Shapes / Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full filter blur-3xl animate-pulse"
      />
    </section>
  );
};

export default Hero;
