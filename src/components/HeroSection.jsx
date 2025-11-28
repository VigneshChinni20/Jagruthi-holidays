import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HeroSection.css";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

export default function HeroSection() {
  const images = [hero1, hero2, hero3, hero4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="hero-bg"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Jagruthi</h1>
        <h2 className="hero-subtitle">Will Complete Your Life</h2>
        <p className="hero-desc">
          Breeze being the most known name in the entertainment industry,
          offers its 500+ properties across India and abroad.
        </p>
      </motion.div>
    </section>
  );
}
