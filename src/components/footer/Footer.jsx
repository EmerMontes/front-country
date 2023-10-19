import style from './footer.module.css'

export const Footer = ()=>{
    return(
    <footer className={style.head}>

        <div className={style.title}>
           <footer className={style.hh}>Created by:</footer>
        </div>

        <div className={style.card}>
         <a href='https://www.linkedin.com/in/emerson-montes-422037262/' target='_blank'>
         <img  src='../../imagenes/linkedin.gif' className={style.logoLink} alt="linkedin logo" />
         </a>
       </div>

    
    </footer>
    )
}