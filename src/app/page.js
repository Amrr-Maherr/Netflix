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
    {
      url: "/Assets/deadpool-wolverine-3840x2160-16840.jpg",
      title: "Deadpool & Wolverine",
      text: "The most anticipated duo is here to shake up the Marvel Universe! Get ready for action, humor, and unexpected alliances.",
      button: "Get Tickets",
    },
    {
      url: "/Assets/the-wild-robot-3840x2160-19415.jpg",
      title: "The Wild Robot",
      text: "A heartwarming animated adventure about a robot learning to survive and find its place in the natural world.",
      button: "Learn More",
    },
    {
      url: "/Assets/venom-the-last-3840x2160-16995.jpg",
      title: "Venom: The Last Dance",
      text: "Eddie and Venom face their ultimate challenge! The symbiote saga comes to a thrilling and explosive conclusion.",
      button: "See the Trailer",
    },
    {
      url: "/Assets/EG-en-20250303-TRIFECTA-perspective_3241eaee-fd55-4a8b-bd9e-cd6c0058b093_small.jpg",
      title: "Your Next Obsession Awaits",
      text: "Discover a world of movies, shows, and unforgettable stories. What will you binge next?",
      button: "Explore Now",
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
