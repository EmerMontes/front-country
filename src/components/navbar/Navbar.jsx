import { getCountry, getCountryByName } from '../../redux/thunks/thunksCountry'
//import { reloadPage } from '../../redux/thunks/thunksCountry'
import { reloadInput } from '../../redux/thunks/thunksCountry'
import {useDispatch, useSelector} from 'react-redux'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'
import { getAllCountry, getFilter } from '../../redux/thunks/thunksAllCountries'


export const NavBar = ()=>{
   const dispatch = useDispatch() 
   const {input} = useSelector((state)=>state.country)
  
    const handleInput =(event)=>{
       const value = event.target.value
       dispatch(reloadInput(value))
       if(value.length!==0){
       dispatch(getCountryByName(value))
       }else{
        return dispatch(getCountry())
       }
    }
    const handleFilter = (event)=>{
      if (event.target.value === 'All') {
         return dispatch(getCountry())
      }
      dispatch(getFilter(event.target.value))
    } 

  return (
    <div className={style.contentNav}>
       <input type="text"
        placeholder="🔍︎"
        value={input}
        onChange={handleInput} />
        

        <div className={style.allSelect}>
    
            <select onChange={handleFilter} name="continent" id="continent" defaultValue="">
             <option  disabled value="">Filter by continent</option>
             <option value="All">All</option>
             <option value="Antarctica">Antarctica</option>
             <option value="Africa">Africa</option>
             <option value="Asia">Asia</option>
             <option value="Europe">Europe</option>
             <option value="Oceania">Ocenia</option>
             <option value="North America">North America</option>
             <option value="South America">South America</option>
            </select>

            <select onChange={handleFilter} name="activity" id="activity" defaultValue="">
                <option value="" disabled> Filter by actividad</option>
                <option value="has activity">Has activity</option>
                <option value="has not activity">Does not Have activity</option>
            </select>

            <select  onChange={handleFilter} name="order" id="order" defaultValue="">
                <option value="" disabled>Order</option>
                <option value="ascendente">A - Z</option>
                <option value="descendente">Z - A</option>
          </select>   
          <select onChange={handleFilter} name="orderPulation" >
                <optgroup label='Population size'>
                <option value="mayorAmenor">From high to low</option>
                <option value="menorAmayor">From low to high</option>
                </optgroup>
             </select>
             <Link to={'/createActivity'}><button>Create Activity</button></Link>
        </div>
    </div>
  )
}