import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces";
import {IPagination} from "../../interfaces/paginationInterface";
import {AxiosError} from "axios";
import {movieService} from "../../services";


interface IState {
    searchedMovies: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

const initialState: IState = {
    searchedMovies: [],
    page: null,
    total_pages: null,
    total_results: null,
}

const getSearchedMovies = createAsyncThunk<{ data: IPagination<IMovie>, page: number, query: string }, {
    page: number,
    query: string
}>(
    'searchSlice/getSearchedMovies',
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

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getSearchedMovies.fulfilled, (state, action) => {
            state.searchedMovies = action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
            state.total_results = action.payload.data.total_results

        })
})

const {reducer:searchReducer,actions}= searchSlice

const searchActions = {
    ...actions,
    getSearchedMovies
}

export {
    searchActions,
    searchReducer
}