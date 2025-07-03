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
            state.register = action?.payload
            localStorage.setItem("register", JSON.stringify(state.register))
        },
        removeAccount: (state, action) => {
            console.log(action.payload, initialState, 'aaaa1')
            if(state?.register?.find((acc) => acc?.email === action?.payload?.email)) {
                const filtered = state?.register?.filter((acc) => acc?.email !== action?.payload?.email)
                console.log(filtered,'aaaa2')
                state.register = filtered;
                localStorage.setItem("register", JSON.stringify(state.register))
            }
        }
        
    }
})


export const {registerForm, removeAccount} = RegisterSlice.actions
export default RegisterSlice.reducer;