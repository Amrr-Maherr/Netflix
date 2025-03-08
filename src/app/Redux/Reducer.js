"use client";
import { SEARCH_MOVIE } from "../Redux/ActionType";

export const MovieReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload; // استبدال الـ state بدلاً من إضافته
    default:
      return state;
  }
};
