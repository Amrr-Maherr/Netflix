"use client"; // تعريف أن هذا المكون يعمل من جهة العميل

import React from "react";
import Image from "next/image";
import Logo from "../../../public/Assets/netflix-3.svg";
import { motion } from "framer-motion";
export default function HeroSection() {
  const containerVariants = {
    // تعريف تحريك للحاوية الرئيسية
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    // تعريف تحريك للعناصر الداخلية
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-dvh flex justify-center items-center flex-col bg-black"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-1/2 md:w-1/3 lg:w-1/4 mb-8"
        variants={itemVariants}
      >
        <Image
          src={Logo}
          alt="Netflix Logo"
          width={500}
          height={300}
          layout="responsive"
          objectFit="contain"
          className="mx-auto"
        />
      </motion.div>
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Unlimited movies, TV <br />
          shows, and more.
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Watch anywhere. Cancel anytime.
        </p>
      </motion.div>
    </motion.div>
  );
}
