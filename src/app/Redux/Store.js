import { configureStore } from "@reduxjs/toolkit";
import { MovieReducer } from "./Reducer";

// إذا كان لديك أكثر من reducer، قم بدمجهم هنا
const rootReducer = {
  movies: MovieReducer,
  // reducer آخر: anotherReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
