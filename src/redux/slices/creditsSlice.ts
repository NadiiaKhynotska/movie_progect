import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICast, ICredit} from "../../interfaces";
import {movieService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    casts:ICast[]
}

const initialState :IState= {
    casts:[]
}

const getAllCasts = createAsyncThunk<{ data: ICredit<ICast> }, { id:number }>(
    'getAllCasts/creditsSlice',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getCredits(id)
            return {data}
        }catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const creditsSlice = createSlice({
    name:'creditsSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAllCasts.fulfilled, (state, action) => {
            state.casts= action.payload.data.cast
        })
})

const {reducer:creditReducer, actions} = creditsSlice
const creditActon={
    ...actions,
    getAllCasts
}

export {
    creditActon,
    creditReducer
}