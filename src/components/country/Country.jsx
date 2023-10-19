import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import style from './country.module.css'

export const Country =()=>{
    const {country} = useSelector((state)=>state.country)
    return (
        <div className={style.contentCountry}>
           {country.map(countries=>{
              return(
                    <Link key={countries.ID} className={style.countries}  to={`/detail/${countries.ID}`}> 
                      <img className={style.imgFlag} src={countries.imgFlag}/>
                      <b>Name:</b> 
                      <br />{countries.name}<br/>
                      <hr />
                      <b>Continent:</b>
                      <br />{countries.continent}
                    </Link> 
                )
           })}
            
        </div>
    )

}