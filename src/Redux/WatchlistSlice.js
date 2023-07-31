import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState ={
    Watchlist: localStorage.getItem("Watchlist")? JSON.parse(localStorage.getItem("Watchlist")) :[]
}

const WatchlistSlice = createSlice({
    name:'watchlist',
    initialState,
    reducers:{
        addToWatchlist:(state, action) =>{
            const itemExists = state.Watchlist.findIndex((item) => item.rank === action.payload.rank);
            if(itemExists > -1){
                //console.log(itemExists,'item')
                toast.warning("You already added item to Watchlist please check it.",{
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else{
                const newItem = {...action.payload, quantity: 1}
                state.Watchlist.push(newItem)
                toast.success("You Successfully Added CryptoCoin to WatchList", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }); 
            }
            localStorage.setItem("Watchlist", JSON.stringify(state.Watchlist))
        },
        removeItems :(state, action) =>{
            const remainingItems = state.Watchlist.filter((item) => item.rank != action.payload.rank);
            state.Watchlist = remainingItems
            localStorage.setItem("Watchlist", JSON.stringify(state.Watchlist))
        },
        deleteAll : (state, action) =>{
            state.Watchlist = []
            localStorage.setItem("Watchlist", JSON.stringify(state.Watchlist))
        },
        
    }
});

export const {addToWatchlist, removeItems, deleteAll} = WatchlistSlice.actions;
export default WatchlistSlice.reducer;