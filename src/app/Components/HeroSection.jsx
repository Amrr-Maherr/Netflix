"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../public/Assets/netflix-3.svg";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules"; 

// تفعيل الوحدات النمطية
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination]);

export default function HeroSection() {
  // بيانات السلايدر (يمكن استبدالها ببيانات حقيقية من قاعدة البيانات أو API)
  const slides = [
    {
      id: 1,
      title: "Batman v Superman: Dawn of Justice",
      teaser: "The world's finest heroes clash...",
      image: "/Assets/Slider/batman-v-superman-3840x2160-18724.jpg",
      buttonText: "Watch Now",
      link: "/AllMovies",
    },
    {
      id: 2,
      title: "Deadpool & Wolverine",
      teaser: "Two unlikely heroes team up...",
      image: "/Assets/Slider/deadpool-wolverine-3840x2160-17290.jpg",
      buttonText: "Learn More",
      link: "/AllMovies",
    },
    {
      id: 3,
      title: "Fast X",
      teaser: "The end of the road begins...",
      image: "/Assets/Slider/fast-x-vin-diesel-3840x2160-10266.jpg",
      buttonText: "Watch Trailer",
      link: "/AllMovies",
    },
    {
      id: 4,
      title: "Mission: Impossible - Dead Reckoning Part One",
      teaser: "Fate has other plans...",
      image: "/Assets/Slider/mission-impossible-3840x2160-11684.jpg",
      buttonText: "Rent Now",
      link: "/AllMovies",
    },
    {
      id: 5,
      title: "Spider-Man: Across the Spider-Verse",
      teaser: "Miles Morales returns...",
      image: "/Assets/Slider/spider-man-across-3840x2160-11595.jpg",
      buttonText: "Stream Now",
      link: "/AllMovies",
    },
    {
      id: 6,
      title: "Superman",
      teaser: "The Man of Steel soars...",
      image:
        "/Assets/Slider/superman-dc-superheroes-henry-cavill-dc-comics-black-3840x2160-8980.jpg",
      buttonText: "Discover More",
      link: "/AllMovies",
    },
    {
      id: 7,
      title: "The Flash",
      teaser: "Worlds collide...",
      image: "/Assets/Slider/the-flash-2023-3840x2160-11352.jpg",
      buttonText: "Buy Now",
      link: "/AllMovies",
    },
    {
      id: 8,
      title: "Thor: Love and Thunder",
      teaser: "The God of Thunder embarks...",
      image:
        "/Assets/Slider/thor-love-and-thunder-chris-hemsworth-as-thor-natalie-3840x2160-8772.jpg",
      buttonText: "Watch Free",
      link: "/AllMovies",
    },
    {
      id: 9,
      title: "Thunderbolt Ross",
      teaser: "A new force emerges...",
      image: "/Assets/Slider/thunderbolt-ross-3840x2160-19876.jpg",
      buttonText: "Explore",
      link: "/AllMovies",
    },
    {
      id: 10,
      title: "Thunderbolts",
      teaser: "Justice has a new team...",
      image: "/Assets/Slider/thunderbolts-5k-3840x2160-21282.jpg",
      buttonText: "See More",
      link: "/AllMovies",
    },
    {
      id: 11,
      title: "Explore More",
      teaser: "Discover new worlds...",

      buttonText: "Browse All",
      link: "/Login",
      noImage: true, // علامة للإشارة إلى عدم وجود صورة خلفية
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-dvh relative overflow-hidden"
      style={{ width: "100%", height: "100vh" }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]} // إضافة Autoplay هنا
        className="mySwiper"
        autoplay={{
          delay: 5000, // تغيير الشريحة كل 5 ثواني
          disableOnInteraction: false, // استمرار التشغيل التلقائي حتى بعد تفاعل المستخدم
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-dvh flex items-center justify-center"
              style={{
                backgroundColor: slide.noImage ? "black" : undefined, // لون الخلفية للشريحة الأخيرة
              }}
            >
              {/* عرض مشروط للصورة والتراكب */}
              {!slide.noImage && (
                <>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority // لتحسين أداء الصفحة الأولى
                  />
                  <div className="absolute inset-0 opacity-50 bg-black"></div>
                </>
              )}
              {/* محتوى الشريحة */}
              <div className="relative z-10 text-center text-white p-4 md:p-8">
                <motion.div
                  className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 mx-auto"
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
                <motion.h2
                  className="text-2xl md:text-3xl font-bold leading-tight mb-2"
                  variants={itemVariants}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-4"
                  variants={itemVariants}
                >
                  {slide.teaser}
                </motion.p>
                <Link href={slide.link}>
                  <motion.button
                    variants={itemVariants}
                    className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-3 px-20 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  >
                    {slide.buttonText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
