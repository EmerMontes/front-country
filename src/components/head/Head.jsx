import style from './head.module.css'
import { useState } from 'react';
import '../../styles/index.css'
import { setDarkMode } from '../../redux/thunks/thunksCountry';
import { useDispatch, useSelector } from 'react-redux';

export const Head = ()=>{
    const dispatch = useDispatch()
    const {isDarkMode}=useSelector((state)=>state.country)

    const handleThemeChange = () => {
      dispatch(setDarkMode(!isDarkMode))
    };


    return(
      

    <div className={style.head}>
        <div className={style.title}>
         <h3 className={style.hh}>CountriesPage</h3>

        </div>
        <div className={style.boton}>
            <button onClick={()=>handleThemeChange()}>{isDarkMode ?'🌙': '☀️'}</button>
        </div>
    
   
      </div>
    )
}