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
        <span className="absolute flex text-center text-2xl top-10">
          {name}
        </span>
        {icon}
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return iconItems.map((skill) => (
    <Card icon={skill.icon} key={skill.name} name={skill.name} />
  ));
}
