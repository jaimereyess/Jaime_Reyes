"use client";
import { useEffect, useState } from "react";

export const Text = () => {
  const text =
    "Desarrollador web apasionado y comprometido con la creación de experiencias digitales excepcionales.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);
  return (
    <p className="md:text-lg h-20">
      <i>{displayText}</i>
    </p>
  );
};
