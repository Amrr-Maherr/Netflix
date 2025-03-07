"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Social Icons

const Footer = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-black py-8 px-6 text-gray-500"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container mx-auto">
        {/* Top Section - Social Icons & "Questions? Contact Us" */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start md:flex-row justify-between mb-4"
        >
          <motion.p variants={itemVariants} className="mb-4 text-sm">
            Questions? Contact Us.
          </motion.p>

          <motion.div variants={itemVariants} className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                style={{ color: "#4267B2" }}
              />
            </a>
            <a href="#" className="hover:text-purple-500">
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "#E4405F" }}
              />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FontAwesomeIcon
                icon={faTwitter}
                size="lg"
                style={{ color: "#1DA1F2" }}
              />
            </a>
            <a href="#" className="hover:text-red-600">
              <FontAwesomeIcon
                icon={faYoutube}
                size="lg"
                style={{ color: "#FF0000" }}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <motion.ul variants={itemVariants} className="list-none">
            <li>
              <a href="#" className="hover:underline text-sm">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Speed Test
              </a>
            </li>
          </motion.ul>
          <motion.ul variants={itemVariants} className="list-none">
            <li>
              <a href="#" className="hover:underline text-sm">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Legal Notices
              </a>
            </li>
          </motion.ul>
          <motion.ul variants={itemVariants} className="list-none">
            <li>
              <a href="#" className="hover:underline text-sm">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Only on Netflix
              </a>
            </li>
          </motion.ul>
          <motion.ul variants={itemVariants} className="list-none">
            <li>
              <a href="#" className="hover:underline text-sm">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Contact Us
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Bottom Section - Language Selector & Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center md:items-start md:flex-row justify-between"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <select className="bg-black text-gray-500 border border-gray-700 rounded py-1 px-2 text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </motion.div>

          <motion.p variants={itemVariants} className="text-xs">
            © 2024 Movie API Netflix
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
