"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { iconItems } from "./list";
import { container, item } from "./animations";

export const Icons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const element = document.getElementById("list");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          setIsVisible(true);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      id="list"
      className={`list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-2 rounded-3xl p-10
                 gap-10 ${isVisible ? "visible" : "invisible"}`}
    >
      {iconItems.map((icon) => (
        <motion.li
          key={icon.name}
          className="list-none flex flex-col justify-center items-center"
          variants={item}
        >
          {icon.icon}
          <span className="mt-2 md:text-l lg:text-xl lg:font-medium">
            {icon.name}
          </span>
        </motion.li>
      ))}
    </motion.div>
  );
};
