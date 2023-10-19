import { Link } from 'react-router-dom'
import style from './back.module.css'

export const Back =()=>{

  return (
    <div className={style.back}>
       <Link className={style.aref} to={'/home'}>
        <button>
             ⬅️
        </button>
       </Link>

    </div>


  )

}