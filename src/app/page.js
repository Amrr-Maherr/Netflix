"use client";

import { useState } from "react";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MovieSection from "./Components/MovieSection";
import PricingSection from "./Components/PricingSection";

export default function Home() {
  const [moviesPoster, setmoviesPoster] = useState([
    {
      url: "/Assets/charlie-cox-matt-3840x2160-21315.jpg",
      title: "Charlie Cox",
      text: "Step into a world full of mystery and action, where the hero faces unexpected challenges in the fight for justice.",
      button: "Watch Now",
    },
    {
      url: "/Assets/thunderbolt-ross-3840x2160-21423.jpg",
      title: "Thunderbolt Ross",
      text: "Unstoppable power and endless battles! Follow General Ross on his mission to protect the world from new threats.",
      button: "More Details",
    },
    {
      url: "/Assets/superman-2025-3840x2160-20308.jpg",
      title: "Superman",
      text: "The legend returns! Get ready for an epic adventure as Superman faces an unprecedented threat.",
      button: "Discover the Story",
    },
  ]);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      {moviesPoster.map((poster, index) => (
        <MovieSection key={index} poster={poster} />
      ))}
      <PricingSection />
      <Footer />
    </>
  );
}
