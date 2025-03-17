"use client";
import { useState } from "react";
import Logo from "../../../public/Assets/netflix-3.svg";
import Footer from "../Components/Footer";
import axios from "axios";
import Link from "next/link"; // Import Link
import { motion } from "framer-motion"; // Import motion

export default function Actors() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU";
  const endPoint = "https://api.themoviedb.org/3/search/person";

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query) {
      console.log("No search query entered.");
      setData([]);
      return;
    }

    try {
      const response = await axios.get(`${endPoint}?query=${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(response.data.results);
      console.log("Search results:", response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };

  const movieVariants = {
    // Basic animation variants
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex justify-center items-center">
            <div className="max-w-xl lg:max-w-lg text-center">
              <img src={Logo.src} alt="Netflix Logo" />
              <p className="mt-4 text-lg text-gray-300">
                Unveil the stars. Seek your cherished stage presence.
              </p>
              <form className="mt-6 flex  gap-x-4" onSubmit={handleSearch}>
                <input
                  onChange={(event) => setQuery(event.target.value)}
                  id="text"
                  name="text"
                  type="text"
                  required
                  className="w-100% min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  placeholder="Whisper their name..."
                  value={query}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Illuminate Search
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
        {data.length > 0 && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((actor) => (
                <Link
                  href={`/pages/actor/${actor.id}`}
                  key={actor.id}
                  className="mx-auto"
                >
                  <motion.div
                    className="bg-gray-800 rounded-md overflow-hidden w-72 shadow-md hover:scale-105 transition-transform duration-200 ease-in-out mx-auto"
                    variants={movieVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className="w-full h-auto block"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-white">
                        No Image
                      </div>
                    )}
                    <div className="p-4">
                      {actor.name ? (
                        <>
                          <h2 className="text-white text-lg font-semibold mb-2">
                            {actor.name}
                          </h2>
                        </>
                      ) : (
                        <>Not Found</>
                      )}
                      {actor.known_for_department ? (
                        <>
                          <p className="text-gray-400 text-sm mb-2">
                            ({actor.known_for_department})
                          </p>
                        </>
                      ) : (
                        <>Not Found</>
                      )}
                      {/* Displaying known for movies/shows (limited to the first 3) */}
                      {actor.known_for && actor.known_for.length > 0 ? (
                        <>
                          <p className="text-gray-300 text-base line-height-relaxed">
                            Known for:
                          </p>
                          <ul>
                            {actor.known_for.slice(0, 3).map((item, index) => (
                              <li key={index} className="text-gray-300 text-sm">
                                {item.title || item.name}
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <>Not Found</>
                      )}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
