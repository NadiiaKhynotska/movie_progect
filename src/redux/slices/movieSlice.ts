import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    movies: IMovie[];
    page: number;
    total_pages: number;
}

const initialState: IState = {

    movies: [],
    page: 0,
    total_pages: 0,


}

const getAll = createAsyncThunk<IMovie[], { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page)
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
        })
})


const {reducer: movieReducer, actions} = movieSlice
const movieActions = {
    ...actions,
    getAll
}

export {
    movieActions,
    movieReducer,
}