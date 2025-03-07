"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Assets/netflix-3.svg";
import Image from "next/image";
import Link from "next/link";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your password reset logic here (e.g., call an API)
    //For this example, we're simulating a successful reset
    setSuccess(true);
    setError("");
  };

  return (
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

        {!success ? (
          <motion.form
            variants={itemVariants}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <p className="text-center">
              Enter your email and we'll send you a link to reset your password.
            </p>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && (
              <motion.div
                variants={itemVariants}
                className="bg-red-600 text-white py-2 px-4 rounded"
              >
                {error}
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Reset Password
              </button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-green-500">
              A password reset link has been sent to your email address.
            </p>
            <Link
              className="font-bold text-blue-500 hover:text-blue-800 mt-4 inline-block"
              href="/Login"
            >
              Back to Login
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ResetPassword;
