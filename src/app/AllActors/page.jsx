"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ActorCard from "../Components/ActoreCard";
import MovieCard from "../Components/MovieCard";
import Link from "next/link";

export default function AllActors() {
  const [actors, setActors] = useState([]);
  const [movie,setmovie] = useState([])
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
const topRated = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(response.data.results);
    setmovie(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    fetchActors();
    topRated();
  }, []);
  
  return (
    <>
      <div className="bg-black py-8">
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
      <section>
        <div className="h-dvh">
          <div className="w-full text-white text-center my-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Highest Rated: <span className="text-red-500">Must-See</span>{" "}
              Movies
            </h2>
            <p className="text-gray-400 mt-2">
              The best of the best, waiting for you.
            </p>
          </div>
          <div className="flex flex-wrap w-full">
            {movie.map((mo) => (
              <Link href={`/${mo.id}`} className="mx-auto" key={mo.id}>
                <div className="w-64 m-4 rounded-md overflow-hidden shadow-md bg-gray-800 text-white">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${mo.poster_path}`}
                    alt={mo.title}
                    width={256}
                    height={384}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{mo.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-3">
                      {mo.overview}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Vote Average: {mo.vote_average}
                    </p>
                    <p className="text-xs text-gray-500">
                      Release Date: {mo.release_date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
