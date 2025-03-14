"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ActorCard from "../Components/ActoreCard";

export default function AllActors() {
  const [actors, setActors] = useState([]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU";

  const fetchActors = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/person/popular",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setActors(response.data.results);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };

  useEffect(() => {
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
