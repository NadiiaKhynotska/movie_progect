import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenresResponseInterface} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
}
const getAllGenres = createAsyncThunk<{ data: IGenresResponseInterface<IGenre> }, void>(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data}  = await genreService.getAll()
            return {data}
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, action) => {
            state.genres = action.payload.data.genres
        })

})

const {reducer: genreReducer, actions} = genreSlice
const genreActions = {
    ...actions,
    getAllGenres
}

export {
    genreReducer,
    genreActions
}