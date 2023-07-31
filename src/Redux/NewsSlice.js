import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//import { act } from "react-dom/test-utils";

const initialState ={
    cryptoNews:[],
    errormsg:'',
    status:'idle'
}

const options = {
    method: 'GET',
    url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
    params: {
      max_articles: '10',
      last_n_hours: '48',
      top_n_keywords: '10'
    },
    headers: {
      'X-RapidAPI-Key': '92dad9f8b3msh5fca76c91b57de7p18fcb7jsn07d0b89330f5',
      'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
    }
  };
export const fetchNews = createAsyncThunk('cryptoNews', async(id=null, thunkAPI) =>{
    try {
        const response = await axios.request(options);
        console.log(response.data,'ooo')
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

const NewsSlice = createSlice({
    name:'CryptoNews',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchNews.pending, (state, action) =>{
            state.status = "pending"
        }).addCase( fetchNews.fulfilled, (state, action) =>{
            state.status = "success"
            state.cryptoNews = action.payload
        }).addCase(fetchNews.rejected, (state, action) =>{
            state.status = "error"
            state.errormsg = action.payload
        })
    }
});

export default NewsSlice.reducer;