import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {IPagination} from "../../interfaces/paginationInterface";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[];
    moviesByGenres:IMovie[];
    searchedMovies: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

const initialState: IState = {
    movies: [],
    moviesByGenres: [],
    searchedMovies: [],
    page: null,
    total_pages: null,
    total_results: null,
}

const getAll = createAsyncThunk<{data:IPagination<IMovie>, page:number}, {page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data}= await movieService.getAll(page)
            return {data,page}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getByGenre = createAsyncThunk<{ data: IPagination<IMovie>, page: number, with_genres: number }, { page: number, with_genres: number }>(
    'movieSlice/getByGenre',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenre(page, with_genres)
            return {data, page, with_genres}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const getSearchedMovies = createAsyncThunk<{ data: IPagination<IMovie>, page: number, query: string }, {
    page: number,
    query: string
}>(
    'movieSlice/getSearchedMovies',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByKeyWord(query, page)
            return {data, page, query}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
            state.total_results = action.payload.data.total_results
            state.moviesByGenres = []
            state.searchedMovies = []
        })
        .addCase(getByGenre.fulfilled, (state, action) => {
            state.moviesByGenres =action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
            state.total_results = action.payload.data.total_results
            state.movies = []
            state.searchedMovies = []

        })
        .addCase(getSearchedMovies.fulfilled, (state, action) => {
            state.searchedMovies = action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
            state.total_results = action.payload.data.total_results
            state.movies = []
            state.moviesByGenres = []

        })
})


const {reducer: movieReducer, actions} = movieSlice
const movieActions = {
    ...actions,
    getAll,
    getByGenre,
    getSearchedMovies
}

export {
    movieActions,
    movieReducer,
}