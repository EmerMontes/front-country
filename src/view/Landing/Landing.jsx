import { useNavigate } from "react-router-dom";
import style from './Landing.module.css'

export const Landing = ()=>{
  const navigate = useNavigate()
    return(
        <div className={style.landing}>
      <div>
      <h1>Welcome</h1>
        <a href="/home" >
          <img src='/world.gif' className={style.logo} alt="Country logo" />
        </a>
      </div>
      <p> This is a SPA based on countries api.<br/>
       Here we use React, Redux-toolkit, and navito css for the front-end <br /> also we use sequelize and postgresSQL for the back-end. 
      </p>
      <div >
        <button  className={style.btn} onClick={() => (navigate('/home'))}>
          <i className={style.animation}></i>
          LOGIN
          <i className={style.animation}></i>
        </button>
      </div>

    </div>
    )
}