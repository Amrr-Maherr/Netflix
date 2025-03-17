"use client"; // Definition that this component runs on the client-side
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faSearch, faUsers } from "@fortawesome/free-solid-svg-icons"; // Importing Icons
import Link from "next/link";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      title: "Search Movies",
      description: "Find your favorite movies with our advanced search.",
      icon: faSearch,
      link: "/AllMovies", // Add Link to Search
    },
    {
      title: "All Movies",
      description: "Explore our extensive library of movies.",
      icon: faFilm,
      link: "/Movies", // Add Link to All Movies
    },
    {
      title: "Popular Actors",
      description: "Discover and explore your favorite actors.",
      icon: faUsers,
      link: "/AllActors", // Add Link to Actors
    },
    {
      title: "Search Actors",
      description: "Find your Favorite actors with our advanced search.",
      icon: faMagnifyingGlass,
      link: "/Actors", // Add Link to Actors Search
    },
  ];
  return (
    <motion.div
      className="bg-black py-12 px-5"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Explore Movies and Actors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 backdrop-blur-md bg-opacity-10 bg-gray-900 border border-gray-800"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-red-500 text-3xl mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
              <Link
                href={feature.link}
                className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-300"
              >
                Explore
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
