"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";

export default function Details() {
  const { id } = useParams();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

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
        console.log(response.data);
        
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
          <div className="movie-img">
            {data.backdrop_path ? (
              <img
                src={`${imageBaseUrl}${data.backdrop_path}`}
                alt={data.title}
                className="rounded-md shadow-md w-full h-auto"
              />
            ) : (
              <div className="bg-gray-800 rounded-md shadow-md">
                No Image Available
              </div>
            )}
            <p className="mt-5 text-gray-400">{data.tagline}</p>
          </div>
          <div className="movie-data text-left">
            {" "}
            {/* Changed text-center to text-left */}
            <h2 className="text-4xl font-bold mb-4">{data.title}</h2>
            <div className="flex items-center mb-2">
              <span className="mr-2">{data.vote_average}</span>
              <span>({data.vote_count} votes)</span>
            </div>
            <p className="text-lg mb-4">{data.overview}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Genres:</h3>
              <ul className="flex flex-wrap gap-2">
                {data.genres &&
                  data.genres.map((genre) => (
                    <li
                      key={genre.id}
                      className="bg-gray-800 rounded-full px-3 py-1 text-sm"
                    >
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-4">
              <p>Release Date: {data.release_date}</p>
              <p>Runtime: {data.runtime} minutes</p>
            </div>
            <div className="flex space-x-4">
              {" "}
              {/* Removed justify-center */}
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Play
              </button>
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
