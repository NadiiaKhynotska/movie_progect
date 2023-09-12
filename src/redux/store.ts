import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {searchReducer} from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        searchMovies: searchReducer,
    }
})
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {store}