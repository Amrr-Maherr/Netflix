"use client"; // Definition that this component runs on the client-side
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faSearch,
  faImages,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons"; // Importing Icons

const FeaturesSection = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Endless Entertainment",
      description:
        "Dive into a vast library of movies and shows, all at your fingertips.",
      icon: faDatabase,
    },
    {
      title: "Smart Search",
      description:
        "Find exactly what you're looking for with our powerful search tools.",
      icon: faSearch,
    },
    {
      title: "Stunning Visuals",
      description:
        "Get access to high-quality images and artwork for all your content.",
      icon: faImages,
    },
    {
      title: "Always There for You",
      description:
        "Our dedicated support team is ready to assist you with any questions.",
      icon: faLifeRing,
    },
  ];

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <motion.div
      className="bg-black py-12 px-5" // Netflix's primary background color
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Everything You Need to Stream
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300" // Dark card background
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-red-500 text-3xl mb-4" // Netflix Red color
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {truncateText(feature.title, 25)}
              </h3>
              <p className="text-gray-400">
                {truncateText(feature.description, 60)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
