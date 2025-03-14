"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

export default function UpComing() {
    const [data, setData] = useState([])
     const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU";
     const getData = async() => {
         try {
            const response = await axios.get(
              "https://api.themoviedb.org/3/movie/upcoming",
              {
                headers: { Authorization: `Bearer ${accessToken}` },
                }
            );
            setData(response.data.results);
         }
         catch (error) {
             console.log(error);
         }
    }
    useEffect(() => {
        getData()
    },[])
    return (
      <>
        <section>
          <div className="container">
            <div className="my-5">
              <h1 className="text-white text-center text-3xl font-semibold tracking-tight">
                Get Ready: Upcoming Movies You Can't Miss!
              </h1>
              <p className="text-gray-400 text-center mt-2">
                Sneak peek at the next big screen hits. Mark your calendars!
              </p>
            </div>
            <div className="flex flex-wrap w-full">
              {data.map((mo) => (
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