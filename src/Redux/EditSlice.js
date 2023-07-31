import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    edit: localStorage.getItem("edit")? JSON.parse(localStorage.getItem("edit")) :[]
}
const EditSlice = createSlice({
    name:'editform',
    initialState,
    reducers:{
        editForm:(state, action) =>{
            state.edit = [action.payload]
            localStorage.setItem("edit", JSON.stringify(state.edit))
        },
        
    }
})
export const {editForm} = EditSlice.actions
export default EditSlice.reducer;