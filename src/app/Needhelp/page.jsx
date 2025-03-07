"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Assets/netflix-3.svg";
import Image from "next/image";
import Footer from "../Components/Footer";
import Link from "next/link";

const NeedHelp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        className="min-h-screen flex items-center justify-center bg-black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-black rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 py-10 px-8 text-gray-300">
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <Image
              src={Logo}
              alt="Netflix Logo"
              width={200}
              height={50}
              className="mx-auto"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div>
              <h3 className="font-semibold">Common Issues</h3>
              <ul className="list-none pl-0">
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot email or password
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Troubleshooting login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Account locked
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="list-none pl-0">
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Visit the Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Community Forums
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Account Security</h3>
              <ul className="list-none pl-0">
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Change your password
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Update payment information
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    Report a security issue
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Back to Login */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <Link className="font-bold text-blue-500 hover:text-blue-800" href="/Login">
              Back to Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <Footer/>
    </>
  );
};

export default NeedHelp;
