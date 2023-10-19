import style from './allActivity.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
//import {editActivity} from '../createActivity/ActivityCreate'
import { useNavigate } from 'react-router-dom'

export const AllActivity = ()=>{

    const navigate= useNavigate();

    const [allActivities, setAllActivity]= useState([])

    useEffect ( ()=> {
        try{
          axios.get(`/activities`).then(({data})=>{
            setAllActivity(data)
         })
        }catch(error){
          setAllActivity([])
        }
    },[])

    const deleteActivity = async (ID)=>{
       try {
          await axios.delete(`/activities/${ID}`)
          setAllActivity((prevActivities) => prevActivities.filter((activity) => activity.ID !== ID));
       }catch (error) {
         alert('Delete falled')
       }
   }
   const editActivity = async (ID)=>{
      try {
       const {data} = await axios.get(`/activities/${ID}`)
       console.log(data)
       navigate('/createActivity', { state: {data} });

      } catch (error) {
        
      }

   }

   return (
    <div className={style.contentActivity}>
         <div className={style.back}>

       <Link className={style.aref} to={'/createActivity'}>
        <button>
             ⬅️
        </button>
       </Link>

    </div>
       { allActivities.length < 1
       ? <h1>No activity,<br /> please create one</h1> 
       : allActivities.map(activity =>{
        return (
            <div key={activity.ID} className={style.card}>
                   <div className={style.circle}></div>
                   <div className={style.circle}></div>
                  <div className={style.cardInner}>
                    
               <p><b>Name: </b>  {activity.name}</p> 
               <p><b>Difficulty:   </b>{activity.difficulty}<br/></p>
               <p><b>Season:   </b>{activity.season}<br/></p>
               <p><b>Duration:   </b>{activity.duration}<br/></p>
               <p><b>Countries:</b></p>
               <div className={style.scroll}>
               {activity.Countries?.map((country) => (
                  <p key={country.ID}>{country.name}</p>
                  ))}
               </div>
                  <div>
                  <button onClick={()=> deleteActivity(activity.ID)}> x</button>         
                  <button onClick={()=> editActivity(activity.ID)}>Edit</button>         
                  </div>
                 </div>
            </div>
        )
       })}
    </div>
   )
}