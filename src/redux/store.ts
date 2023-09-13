import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {searchReducer} from "./slices/searchSlice";
import {genreReducer} from "./slices/genreSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        searchMovies: searchReducer,
        genres: genreReducer,
    }
})
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {store}