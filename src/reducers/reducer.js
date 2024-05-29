import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    data: [],
    fillter: [],
    info:[],
    search:'',
    isLoading: false,
    error: false,
}
export const fetchCoins = createAsyncThunk("fetchCoins", async () => {
    const data = await axios(
        "http://localhost:5000/coins"
    );
    return data.data;
});


export const fetchSlice = createSlice({
    name: 'coinslist',
    initialState,
    reducers: {
        addinfo:(state,action)=>{
          state.info=[action.payload]
        },
        removeinfo:(state)=>{
            state.info=[]
          },
          searcha:(state,action)=>{
            console.log('not found')
            if(state.data.filter(item=>item.coinname.toLowerCase()===action.payload.toLowerCase())[0]){
            state.fillter=[...state.data.filter(item=>item.coinname.toLowerCase()===action.payload.toLowerCase())]
          }else{
           state.fillter=[...state.data]
          }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoins.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCoins.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.fillter = action.payload
        });
        builder.addCase(fetchCoins.rejected, (state) => {
            state.isLoading = false
            state.error = true;
        });
    }
})

export const {addinfo,removeinfo,searcha} = fetchSlice.actions

export default fetchSlice.reducer