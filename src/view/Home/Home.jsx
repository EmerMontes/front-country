import { getCountry} from "../../redux/thunks/thunksCountry" //tambien tenia reload page
import { useEffect, useState, lazy, Suspense } from "react"
import {Country} from '../../components/country/Country'
import { NavBar } from "../../components/navbar/Navbar"
import {useDispatch, useSelector} from 'react-redux'
import style from './home.module.css'
import axios from 'axios'


//const Notfound =  lazy(()=>import('./NotFound'))

export const Home =()=>{

 const dispatch = useDispatch()

 useEffect(()=>{
    if (country.length > 0) {
      return
    }  else{
      dispatch(getCountry())
    }
  },[])
  
  const {country,page, error} = useSelector((state)=>state.country)
  const [isLoad,setIsLoad]= useState(true)

  useEffect(() => {
    if (error.length !== 0) {
      setIsLoad(true);
    } else {
      setIsLoad(false);
    }
  }, [error]);

   
 return (
  <>
    <div>
     <NavBar/>
    </div>
    <div className={style.min}>
          <Country/>
  
            {error.length !== 0 ?
            <div className={style.notFound}>
              {isLoad && <h1>Loading...</h1>} 
              <img 
              style={{display: isLoad ? 'none': null}}
              onLoad={()=>{setTimeout(() => {
                setIsLoad(false);
              }, 1000);}} 
              className={style.imgNot} src={'/notFound.png'}  alt="city-notfound" /> 
            </div>
            : null
            }
            {/* <Suspense fallback={<h1>Cargando...</h1>}>
              <Notfound  />
            </Suspense> */}
        </div>
     <div>
    {page !==1 && <button onClick={()=>dispatch(getCountry(page-1))}>{'<'}</button>}
    <button disabled={true}>{page}</button>
    {page !==25 ? <button disabled={country.length<10 || country.length>10} onClick={()=>dispatch(getCountry(page+1))}>{'>'}</button>
    :<button onClick={()=>dispatch(getCountry())}>1</button>}
    </div>

  </>
 )
}