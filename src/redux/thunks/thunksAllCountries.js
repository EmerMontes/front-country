import {setAllCountries, setFilter} from "../countrySlice"
import axios from 'axios'


const {data} =   await axios.get(`https://back-countries.up.railway.app/allCountries`)
export const getAllCountry =()=>{
    return async (dispatch, getAllCountry)=>{
        try {
            dispatch( setAllCountries({allCountries: data}))   
        } catch (error) {
            console.log('error')   
        }
    }
}

export const getFilter =(filter)=>{
    let filtrados = [...data]
    return async (dispatch, getFilter)=>{

              if (filter === 'Antarctica'|| 
                  filter === 'Asia'||
                  filter === 'Africa' ||
                  filter === 'Europe' ||
                  filter === 'Oceania'||
                  filter === 'North America' ||
                  filter === 'South America'){

                    filtrados = filtrados.filter((count) => count.continent === filter)
                } 
                if (filter === 'has activity') {
                    filtrados = filtrados.filter((count) => count.Activities.length >= 1)              
                }
                if (filter === 'has not activity') {
                    filtrados = filtrados.filter((count) => count.Activities.length === 0)
                }
                if(filter === 'ascendente'){
                    filtrados = filtrados.sort((a, b) => a.name.localeCompare(b.name));
                }
                if(filter === 'descendente'){
                    filtrados.sort((a, b) => b.name.localeCompare(a.name));
                }
                if(filter === 'mayorAmenor'){
                    filtrados = filtrados.sort((a, b) => b.population - a.population);   
                }
                if(filter === 'menorAmayor'){
                    filtrados = filtrados.sort((a, b) => a.population - b.population);
                }
                dispatch(setFilter({country: filtrados}))
        
    }
}
        
        
        