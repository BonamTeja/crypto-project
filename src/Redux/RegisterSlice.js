import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    register: localStorage.getItem("register")? JSON.parse(localStorage.getItem("register")) :[]
}

const RegisterSlice = createSlice({
    name:'registerSlice',
    initialState,
    reducers:{
        registerForm: (state,action) => {
            console.log(action.payload,'aaaa')
            state.register.push(action.payload)
            localStorage.setItem("register", JSON.stringify(state.register))
        },
        
    }
})


export const {registerForm} = RegisterSlice.actions
export default RegisterSlice.reducer;