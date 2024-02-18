"use client";
import "./skillsCard.css";
import { motion, Variants } from "framer-motion";
import { iconItems } from "./Technologies/list";

interface CardProps {
  icon: React.ReactNode;
  name: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.0,
    },
  },
};

function Card({ icon, name }: CardProps) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        {icon}
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return iconItems.map((icon) => (
    <Card icon={icon.icon} key={icon.name} name={icon.name} />
  ));
}
