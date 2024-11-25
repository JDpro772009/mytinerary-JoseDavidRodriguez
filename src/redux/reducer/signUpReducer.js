import { createReducer } from "@reduxjs/toolkit";
import { signUp,setUser } from "../actions/signUpActions";

const initialState = {
    loading : false,
    error : false,
    user : null,
    token : null
}


 const signUpReducer = createReducer(initialState,(builder) => {
    builder.addCase(signUp.fulfilled,(state,action)=>{
        
        console.log("Se ejecuto correctamente");
    
        
        
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    })
    .addCase(signUp.pending,(state,action)=>{
        console.log("Se inicio sign up");
    
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(signUp.rejected,(state,action)=>{
        console.log("Error en el sign up");
        
        state.loading = false,
        state.error = action.error.message,
        state.user = null,
        state.token = null
    })

    .addCase(setUser,(state,action)=>{
        state.user = action.payload.user,
        state.token = action.payload.token
    })

})

export default signUpReducer;