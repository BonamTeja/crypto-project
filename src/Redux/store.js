import { configureStore } from "@reduxjs/toolkit";
import CryptoSlice from "./CryptoSlice";
import WatchlistSlice from "./WatchlistSlice";
import BuyItemSlice from "./BuyItemSlice";
import EditSlice from "./EditSlice";
import RegisterSlice from "./RegisterSlice";

const store = configureStore({
    reducer:{
        crypto:CryptoSlice,
        list:WatchlistSlice,
        itemscart:BuyItemSlice,
        editpage:EditSlice,
        register:RegisterSlice,
    }
});
export default store;