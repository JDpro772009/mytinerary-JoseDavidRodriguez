import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cities:[],
    buscar:"",
    ciudad:[]
}

export const cityReducer = createSlice(
    {
        name:"city",
        initialState,
        reducers:{
            addCities: (state,action)=>{
                const {cities} = action.payload
                state.cities = cities
            },
            buscador:(state,action)=>{
                const {buscar} = action.payload
                state.buscar = buscar
            },
            
        }
    }
)

export const {addCities,buscador} = cityReducer.actions
export default cityReducer.reducer