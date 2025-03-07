"use clint"
import { motion } from "framer-motion";
export default function Navbar() {
    return (
      <>
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{duration:"0.5"}}
          className="px-10 py-3"
        >
          <nav className="flex justify-items-end">
            <div className="ms-auto ">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                Sign In
              </button>
            </div>
          </nav>
        </motion.header>
      </>
    );
}