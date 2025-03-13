"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MovieSection({ poster }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 }, // Start slightly faded and moved down
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Animation duration
        delay: 0.2, // Delay before the animation starts
        ease: "easeOut", // Easing function
      },
    },
  };

  return (
    <section
      className="min-h-dvh bg-cover bg-center relative flex justify-center items-end"
      style={{ backgroundImage: `url('${poster.url}')` }}
    >
      <motion.div
        className="w-full h-full p-6 text-white border-t-yellow-400 bg-opacity-60 max-w-md rounded-lg text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-extrabold mb-2">{poster.title}</h1>
        <p className="text-base mb-4 text-gray-400">{poster.text}</p>
        {poster.button && (
          <Link href={`/Movies`}>
            <button className="bg-red-600 hover:bg-red-800 transition-colors text-white font-semibold py-2 px-5 rounded-lg">
              {poster.button}
            </button>
          </Link>
        )}
      </motion.div>
    </section>
  );
}
