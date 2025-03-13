"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../Redux/Action";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import Logo from "../../../public/Assets/netflix-3.svg";

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export default function Movies() {
  const dispatch = useDispatch();
  const AllData = useSelector((state) => state.movies);
  const swiperRef = useRef(null);

  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  useEffect(() => {
    if (AllData.length > 0 && swiperRef.current) {
      if (swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        console.warn("Swiper instance not yet available.");
      }
    }
  }, [AllData]);

  return (
    <>
      <section>
        <motion.div
          className="min-h-dvh relative overflow-hidden"
          style={{ width: "100%", height: "100vh" }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {AllData.length > 0 && (
            <Swiper
              ref={swiperRef}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              {AllData.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div
                    className="relative h-dvh flex items-center justify-center text-center flex-col"
                    style={{
                      backgroundColor: movie.noImage ? "black" : undefined,
                    }}
                  >
                    {!movie.noImage && (
                      <>
                        <img
                          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                          alt={movie.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 opacity-50 bg-black"></div>
                      </>
                    )}
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={500}
                      height={300}
                      className="z-10"
                    />

                    <motion.h2
                      className="relative z-10 text-2xl md:text-3xl font-bold leading-tight text-white mb-2"
                      variants={itemVariants}
                    >
                      {movie.title}
                    </motion.h2>
                    <motion.p
                      className="relative z-10 text-white md:text-lg leading-relaxed p-4 md:p-8"
                      variants={itemVariants}
                    >
                      {movie.overview.slice(0, 50)}...
                    </motion.p>
                    <Link href={`/${movie.id}`} className="z-10">
                      <button className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline transition duration-300">
                        Watch Now
                      </button>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </section>
      <div className="flex flex-wrap justify-center p-4 bg-black">
        {AllData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </>
  );
}
