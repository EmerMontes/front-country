import { getAllCountry } from "../../redux/thunks/thunksAllCountries"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Back} from '../../components/backBottom/Back'
import { useEffect, useState } from 'react'
import {validate} from'./validateActivity'
import Swal from 'sweetalert2'
import style from './create.module.css'
import axios from 'axios'
//import Select from 'react-select'



export const ActivityCreate =()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(getAllCountry())
    },[])
    

    const {allCountries} = useSelector((state)=>state.country)
    const [idCountry, setIdCountry] = useState([])
    const [errores, setErrores]= useState({})
    const [actividad,setActividad]= useState({
      name: '',
      difficulty: '',
      duration:  '' ,
      season:  '' 
    })
    
    
    const location = useLocation()
    const {activity, city} = location.state?.data || {};
    
    
    const [isEditing, setIsEditing] = useState(false);
    
    const ediActivity=()=>{
      setActividad({
          name: activity.name,
          difficulty: activity.difficulty,
          season: activity.season,
          duration: activity.duration
        })  
        const country = city.map((country)=>{
          return (

            country.name
          )
        })
        setIdCountry(country)
      }
    useEffect(() => {
      // Si hay datos en location.state, significa que estamos editando
      setIsEditing(!!location.state?.data);
    }, [location.state]);
    
    useEffect(() => {
      if (isEditing) {
        ediActivity();
      }
    }, [isEditing]);
      
    const  handleNameInput = (event)=>{
       const {name, value} = event.target
       setActividad({...actividad, [name]:value})      
       setErrores(validate({...actividad, [name]:value}))
      }
      
      const handleCountries = (event)=>{
        if(idCountry.includes(event.target.value)) {
          setIdCountry(idCountry.filter((city) => city !== event.target.value));
        }else{
          setIdCountry([...idCountry, event.target.value]);
        }
      } 
        //console.log(idCountry)
      const handleClick=()=>{
        setActividad({...actividad, idCountry : idCountry})
      }
      
      const handleSubmitActivity = async (event)=>{
        
        event.preventDefault()
        
        try {
          if (isEditing) {
            console.log(actividad)
            console.log(isEditing)
            await axios.put(`/activities/${activity.ID}`, actividad)

           return Swal.fire({
              title: 'Activity Edited',
              text: "please come back to create a new one",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/home') 
              }
            })

            // const result = confirm('Edited activity, please come back to create a new one ');

            // if (result) {
            //  return  navigate('/home') 
            //  } else{
            //   return  navigate('/home') 
            //  }
          }else{
            await axios.post('/activities',actividad)
          }
          
        }catch(error) {
            alert('no se puede crear la actividad')
        }
       return Swal.fire({
          title: 'Activity Create',
          text: "do you want to create a new activity?",
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, I do'
        }).then((result) => {
          if (result.isConfirmed) {
            setActividad({name: '',duration: '',difficulty: '',season: ''})
            setIdCountry([])
            document.querySelectorAll('input[type="radio"]').forEach((radio) => {
              radio.checked = false;
            });
          }else{
            navigate('/home')
          }
        })
          // const result =
          //  confirm('activity created or edit, do you want to create a new activity?')
          // if(result){
          //   setActividad({name: '',duration: '',difficulty: '',season: ''})
          //   setIdCountry([])
          //   document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          //     radio.checked = false;
          //   });
          // }else{
          //   navigate('/home') 
          // }
        } 
  return (
        <div className={style.contentActividad}>
            <Back/>
            <section className={style.container}>
             <header><b>Create Activity </b></header>
           
             <form className={style.form} onSubmit={handleSubmitActivity}>
             <div className={style.inputBox}>
             <input 
             value={actividad.name}
             name={'name'}
             required={true}
             placeholder="Name of the activity" 
             type="text"
             onChange={handleNameInput}
             />
             {errores.name && <span style={{color: 'red'}}>{errores.name}</span>}
             </div>
             <div className={style.column}>
              <div className={style.inputBox}>
               <label> <b>Difficulty </b></label>
               <input 
               value={actividad.difficulty}
               name='difficulty'
               onChange={handleNameInput}
               required={true}
               placeholder="lest difficult 1 - 5 more"
               type="number"
                />
               <span style={{color: 'red'}}>{errores.difficulty}</span>

              </div>
              <div className={style.inputBox}>
            <label><b>Duration: </b> (in hour)</label>
            <input 
            value={actividad.duration}
            name='duration'
            required={true}
            onChange={handleNameInput}
            type="text"
            />
            {errores.duration && <span style={{color: 'red'}}>{errores.duration}</span>}
          </div>
       </div>
       <div className={style.genderBox}>
         <label> <b>Season</b></label>
         <br />
         {errores.season && <span style={{color: 'red'}}>{errores.season}</span>}
         <div className={style.genderOption}>
         <div className={style.gender}>
            <input onChange={handleNameInput}  value='Summer'checked={actividad.season==='Summer'}  name="season" type="radio"/>
            <label>Summer</label>
          </div>
          
          <div className={style.gender}>
            <input onChange={handleNameInput}   value='Autumn'checked={actividad.season==='Autumn'} name="season"  type="radio"/>
            <label>Autumn</label>
          </div>
          <div className={style.gender}>
            <input onChange={handleNameInput}  value='Spring' checked={actividad.season==='Spring'} name="season"  type="radio"/>
            <label>Spring</label>
          </div>
          <div className={style.gender}>
            <input onChange={handleNameInput}  value='Winter' checked={actividad.season==='Winter'}  name='season'  type="radio"/>
            <label>Winter</label>
          </div>

        </div>
        </div>
            <label> <b>Select Countries </b> </label>
            <br />
            {idCountry.length < 1 && <span style={{color: 'red'}}>Select one or more</span> }
          <div className={style.selectBox}>
            <select  onChange={handleCountries}  value={idCountry} name='idCountry' multiple   className={style.selectt}>
                {allCountries.map(countries=>{
                    return(
                        <option key={countries.ID}
                        >{countries.name}</option>
                    ) 
                 })} 

            </select>
           
          </div>

       <button disabled={ 
        Object.keys(errores).length > 0 ||
        actividad.name.length === 0 ||
        actividad.difficulty.length === 0 ||
        actividad.duration.length === 0 ||
        actividad.season.length === 0 ||
        idCountry.length === 0} onClick={()=>handleClick()}>{isEditing ? 'Edit' : 'Create'}</button>
       </form>
      </section>
      <div className={style.botonAll}>
        <Link to={'/allActivity'}><button className={style.all}>All activities</button></Link>
       </div>
        </div>
    )
}
