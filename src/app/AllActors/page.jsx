// components/AllActors.js
"use client";
import React, { useState, useEffect } from "react";
import ActorCard from "../Components/ActoreCard.jsx";

export default function AllActors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_POPULAR_PERSON_ENDPOINT,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data from API:", data);
        setActors(data.results);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchActors();
  }, []);
    
  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6 px-4">
          Popular Actors
        </h1>
        <div className="flex overflow-x-auto px-4">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </div>
  );
}
