"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetData } from "../Redux/Action";
import MovieCard from "../Components/MovieCard";

export default function Movies() {
  const dispatch = useDispatch();
  const AllData = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

    return (
      <>
        <div className="flex flex-wrap justify-center p-4 bg-black">
          {AllData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
}