import { setCountry,setCountryByName,reloadInpu,setError, reloadPage, setIsDarkMode } from "../countrySlice"
import axios from 'axios'

export const getCountryByName=(value, page=0)=>{
 
    return async (dispatch, getCountryByName)=>{
        try {
            const {data} = await axios.get(`/countries/name?name=${value}`)
             dispatch( setCountryByName({country: data, page: page}))
             dispatch(getError(''))   
        } catch (error) {
            dispatch( setCountryByName({country: [], page: page}))
            dispatch(getError('error'))
        }
    }
}

export const getCountry =(page=1)=>{
 
    return async (dispatch, getCountry)=>{
        try {
            const {data}= await axios.get(`/countries?page=${page}`)
            dispatch( setCountry({country: data,page: page}))
        } catch (error) {
            console.log('error')   
        }
    }
}
// export const reloadPage=(page=1)=>{
    
//     return async (dispatch, reloadPage)=>{
//         try {
//             const {data}= await axios.get(`http://localhost:3001/countries?page=${page}`)
//             dispatch( setCountry({country: data,page: page}))
//         } catch (error) {
//             console.log('error')
//         }

//     }
// }
export const reloadInput=(value)=>{
    
    return async (dispatch, reloadInput)=>{
         dispatch( reloadInpu({input: value}))
     }
}
export const getError=(value)=>{
    
    return async (dispatch, getError)=>{
         dispatch( setError({error: value}))  
     }
}
export const setDarkMode=(value)=>{
    
    return async (dispatch, setDarkMode)=>{
         dispatch( setIsDarkMode({isDarkMode: value}))  
     }
}



// export const setPage=(page)=>{
    
//     return async (dispatch, setPage)=>{
//          dispatch( reloadPage({page: page}))  
//      }
// }
