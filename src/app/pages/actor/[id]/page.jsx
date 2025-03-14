"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Footer from "@/app/Components/Footer";

export default function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${id}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU`,
            },
          }
        );
        setActor(response.data);
      } catch (err) {
        setError("Failed to fetch actor details");
      } finally {
        setLoading(false);
      }
    };
    fetchActorDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white py-24">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-24">Error: {error}</div>;
  }

  if (!actor) {
    return <div className="text-center text-white py-24">No data found.</div>;
  }

  return (
    <>
      <div
        className="relative isolate px-6 py-24 sm:py-32 lg:px-8 text-white font-sans"
        style={{ letterSpacing: "0.02em" }}
      >
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-10">
          <div className="actor-img">
            {actor.profile_path ? (
              <img
                src={`${imageBaseUrl}${actor.profile_path}`}
                alt={actor.name}
                className="rounded-md shadow-md w-full h-auto"
              />
            ) : (
              <div className="bg-gray-800 rounded-md shadow-md">
                No Image Available
              </div>
            )}
          </div>
          <div className="actor-data text-left">
            <h2 className="text-4xl font-bold mb-4">{actor.name}</h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Biography:</h3>
              <p className="text-gray-300">{actor.biography}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Key Information:</h3>
              <ul className="list-none space-y-2">
                <li>
                  <span className="font-semibold text-red-400">Known For:</span>{" "}
                  <span className="text-gray-300">
                    {actor.known_for_department}
                  </span>
                </li>
                {actor.birthday && (
                  <li>
                    <span className="font-semibold text-red-400">
                      Birthday:
                    </span>{" "}
                    <span className="text-gray-300">{actor.birthday}</span>
                  </li>
                )}
                {actor.place_of_birth && (
                  <li>
                    <span className="font-semibold text-red-400">
                      Place of Birth:
                    </span>{" "}
                    <span className="text-gray-300">
                      {actor.place_of_birth}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {actor.also_known_as && actor.also_known_as.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Also Known As:</h3>
                <div className="flex flex-wrap gap-2">
                  {actor.also_known_as.map((name, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {actor.homepage && (
              <a
                href={actor.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
              >
                Visit Homepage
              </a>
            )}
          </div>
        </div>
          </div>
          <Footer/>
    </>
  );
}
