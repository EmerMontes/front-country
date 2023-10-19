import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
    name: 'country',
    initialState:{
        country:[],
        input:'',
        error:'',
        page:0,
        allCountries:[],
        isDarkMode: false,
    },
    reducers:{
        setCountry:(state,action)=>{
            state.country = action.payload.country
            state.page= action.payload.page
        },
        setAllCountries:(state,action)=>{
            state.allCountries = action.payload.allCountries
        },
        reloadPage:(state,action)=>{
            state.page = action.payload.page
        },
        setCountryByName:(state,action)=>{
            state.country = action.payload.country
        },
        reloadInpu :(state,action)=>{
            state.input = action.payload.input         
        },
        setError :(state,action)=>{
            state.error = action.payload.error
        },
        setFilter :(state,action)=>{
            state.country = action.payload.country
        },
        setIsDarkMode: (state, action)=>{
            state.isDarkMode = action.payload.isDarkMode
        }
    }   
})
export const { setCountry,reloadPage,setFilter,
     setCountryByName,reloadInpu,
     setError, setAllCountries,
     setIsDarkMode
    } = countrySlice.actions
