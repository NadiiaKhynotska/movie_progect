import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {creditReducer} from "./slices/creditsSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        credits: creditReducer,
    }
})
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {store}