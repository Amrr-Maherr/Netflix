"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center text-white py-24">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-24">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return <div className="text-center text-white py-24">No data found.</div>;
  }

  return (
    <>
      <div
        className="relative isolate bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8 text-white font-sans"
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

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hero Image Area */}
            <div className="relative">
              {data.backdrop_path ? ( // Check for backdrop_path existence
                <div
                  className="aspect-w-16 aspect-h-9 rounded-md shadow-md overflow-hidden"
                  style={{
                    backgroundImage: `url(${imageBaseUrl}${data.backdrop_path})`,
                    backgroundSize: "cover", // Or "contain" if you prefer
                    backgroundPosition: "center",
                    width: "100%", // Ensure it fills the container
                    height: "100%", // Ensure it fills the container
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
              ) : (
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-md shadow-md">
                  {/* Fallback content if no backdrop_path */}
                  <div className="text-white text-center py-4">
                    No Image Available
                  </div>
                </div>
              )}

              {/* Overlay Content (Title, Tagline) */}
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold drop-shadow-lg">
                  {data.title}
                </h2>
                <p className="text-lg text-gray-300 mt-2 drop-shadow-lg">
                  {data.tagline}
                </p>
              </div>
            </div>

            {/* Movie Details Section */}
            <div className="p-4">
              <div className="flex items-center mb-3">
                <span className="mr-2 text-lg font-semibold">
                  {data.vote_average}
                </span>
                <span>({data.vote_count} votes)</span>
              </div>
              <p
                className="text-zinc-400 mb-4 leading-relaxed"
                style={{ lineHeight: "1.6" }}
              >
                {data.overview}
              </p>

              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-300 mb-2">
                  Genres:
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {data.genres &&
                    data.genres.map((genre) => (
                      <li
                        key={genre.id}
                        className="bg-zinc-700 rounded-full px-3 py-1 text-sm text-gray-200"
                      >
                        {genre.name}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-zinc-400">
                  Release Date: {data.release_date}
                </p>
                <p className="text-zinc-400">Runtime: {data.runtime} minutes</p>
              </div>

              {data.budget && data.revenue && (
                <div className="mb-4">
                  <p className="text-zinc-400">Budget: ${data.budget}</p>
                  <p className="text-zinc-400">Revenue: ${data.revenue}</p>
                </div>
              )}

              <div className="flex space-x-4 mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md">
                  Play
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded shadow-md">
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
