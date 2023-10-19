import {configureStore} from '@reduxjs/toolkit'
import { countrySlice } from './countrySlice';
//import { allCountrySlice } from './allCountrySlice';

const store = configureStore({
    reducer:{
       country: countrySlice.reducer,
       //allCountry: allCountrySlice.reducer
    }
    
});



export default store;