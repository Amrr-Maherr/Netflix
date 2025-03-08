"use client";
import { SEARCH_MOVIE } from "../Redux/ActionType";
import axios from "axios";

  const apiKey = "aa9d055a1e5bce0d2c4d627c24422d51"; 
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTlkMDU1YTFlNWJjZTBkMmM0ZDYyN2MyNDQyMmQ1MSIsIm5iZiI6MTc0MTAzMjIyMS4yNTQwMDAyLCJzdWIiOiI2N2M2MGIxZGEzMjc3YWI0YTFlNzhmOWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AamZp8WZ_wNUjjkWD-jI2Nj2ZKMO58TcWD-N6fDTEKU"; // استبدل برمز الوصول الخاص بك

export const Search = (payload) => {
  return async (dispatch) => {
    try {
      const Response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query$${payload}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            query: payload,
          },
        }
      );
      console.log("TMDB API Response:", Response.data.results);
        dispatch({
          type: SEARCH_MOVIE,
          payload: Response.data.results,
        });
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };
};
