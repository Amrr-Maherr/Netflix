"use client";
import Footer from "../Components/Footer";
import Logo from "../../../public/Assets/netflix-3.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Search } from "../Redux/Action";
import { motion } from "framer-motion"; // استيراد Framer Motion
import Link from "next/link";

export default function AllMovies() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useSelector((state) => state.movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Search(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // تعريف متغيرات الحركة (Animation Variants)
  const logoVariants = {
    hidden: { opacity: 0, y: -50 }, // غير ظاهر، أعلى قليلاً
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // المدة بالثواني
        delay: 0.5, // تأخير البداية
        ease: "easeOut", // نوع الحركة (easing)
      },
    },
  };

  const movieContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // تأخير ظهور العناصر الداخلية
        staggerChildren: 0.2, // تداخل ظهور العناصر الداخلية
      },
    },
  };

  const movieVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex justify-center items-center min-h-screen">
            <div className="max-w-xl lg:max-w-lg text-center">
              {/* استخدام motion.img مع المتغيرات */}
              <motion.img
                src={Logo.src}
                alt="Netflix Logo"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
              />
              <p className="mt-4 text-lg text-gray-300">
                Looking for a movie to thrill you or a series to captivate your
                imagination? Start your cinematic journey here.
              </p>
              <form className="mt-6 flex  gap-x-4" onSubmit={handleSubmit}>
                <input
                  id="text"
                  name="text"
                  type="text"
                  required
                  className="w-100% min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  placeholder="Enter a movie or series title..."
                  value={searchTerm}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Search Now
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <motion.div
          className="mt-8"
          variants={movieContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-start gap-5 p-5">
            {searchResults.map((movie) => (
              <Link key={movie.id} href={`/${movie.id}`} passHref>
                <motion.div
                  className="bg-gray-800 rounded-md overflow-hidden w-72 shadow-md hover:scale-105 transition-transform duration-200 ease-in-out mx-auto"
                  variants={movieVariants}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-auto block"
                  />
                  <div className="p-4">
                    <h2 className="text-white text-lg font-semibold mb-2">
                      {movie.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-2">
                      ({movie.release_date})
                    </p>
                    <p className="text-gray-300 text-base line-height-relaxed">
                      {movie.overview}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
