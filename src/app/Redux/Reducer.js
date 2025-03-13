"use client";
import { GET_ALL_MOVIES, SEARCH_MOVIE } from "../Redux/ActionType";

export const MovieReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;
    case GET_ALL_MOVIES:
      return action.payload
    default:
      return state;
  }
};
