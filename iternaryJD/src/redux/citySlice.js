import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cities:[]
}

export const cityReducer = createSlice(
    {
        name:"city",
        initialState,
        reducers:{
            addCities: (state,action)=>{
                const {cities} = action.payload
                state.cities = cities
            }
        }
    }
)

export const {addCities} = cityReducer.actions
export default cityReducer.reducer