import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    cryptoCoins:[],
    errormsg:'',
    status:'idle'
}

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '92dad9f8b3msh5fca76c91b57de7p18fcb7jsn07d0b89330f5',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };  

export const fetchData = createAsyncThunk('cryptoCoins', async(id=null, thunkAPI) => {
    
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        return thunkAPI.rejectWithValue(error.message)
    }
});
const CryptoSlice = createSlice({
    name:'cryptoCoins',
    initialState,
    reducer:{},
    extraReducers:(builder) => {
        builder.addCase(fetchData.pending, (state, action)=>{
            state.status = "loading"
        }).addCase(fetchData.fulfilled, (state, action)=>{
            state.status = 'success'
            state.cryptoCoins = action.payload
        }).addCase(fetchData.rejected, (state, action)=>{
            state.status = 'error'
            state.errormsg = action.payload
        })
    }
});

export default CryptoSlice.reducer;