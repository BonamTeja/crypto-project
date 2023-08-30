import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState ={
    buyProducts:localStorage.getItem("buyProducts")? JSON.parse(localStorage.getItem("buyProducts")):[]
    
}
    
const BuyItemSlice = createSlice({
    name:'buyProducts',
    initialState,
    reducers : {
        buyItem:(state, action) =>{
            const itemExists = state.buyProducts.findIndex((item) => item.rank === action.payload.rank);
            console.log(itemExists)
            if(itemExists > -1){
                state.buyProducts[itemExists].cost += Number(action.payload.cost)
                state.buyProducts[itemExists].initialValue += Number(action.payload.initialValue) 
                state.buyProducts[itemExists].price = ((((Number(state.buyProducts[itemExists].cost)-Number(action.payload.cost))*Number(state.buyProducts[itemExists].price))+(Number(action.payload.cost)*Number(action.payload.price)))/Number(state.buyProducts[itemExists].cost))
                toast.success("You Successfully Updated CryptoCoin Price", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(action.payload)
                console.log(itemExists)
                
            }
            else{
                const newItem = {...action.payload}
                state.buyProducts.push(newItem)
                toast.success("You Successfully Buied CryptoCoin", {
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
            localStorage.setItem("buyProducts", JSON.stringify(state.buyProducts))
            
        },
        sellItem:(state,action) =>{
            const itemExists1 = state.buyProducts.findIndex((item)=> item.rank === action.payload.rank);
            console.log(itemExists1,'index');
            console.log(state.buyProducts[itemExists1].rank,'ertyui')
            if(Number(Number(state.buyProducts[itemExists1].cost)-Number(action.payload.sellCost)) > Number(0)){
                state.buyProducts[itemExists1].cost = Number(action.payload.cost)
                state.buyProducts[itemExists1].initialValue = Number(action.payload.initialValue)
                console.log(action.payload,'asdf')
                console.log(state.buyProducts[itemExists1],'1234567')
                toast.success("You Successfully Selled CryptoCoin", {
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
            else if(Number(Number(state.buyProducts[itemExists1].cost)-Number(action.payload.sellCost)) < Number(0)){
                toast.warning("Sell Price must be Less than or Equal to Price(Invested)", {
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
                const remainingItems = state.buyProducts.filter((item) => item.rank != action.payload.rank);
                state.buyProducts = remainingItems 
            }
            localStorage.setItem("buyProducts", JSON.stringify(state.buyProducts))
        }
    }
})

export const {buyItem,sellItem} = BuyItemSlice.actions
export default BuyItemSlice.reducer;