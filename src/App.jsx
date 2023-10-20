import { ActivityCreate } from './view/createActivity/ActivityCreate'
import { AllActivity } from './view/allActivity/AllActivity'
import { Footer } from './components/footer/Footer'
import  {Landing}  from './view/Landing/Landing'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Head } from './components/head/Head'
import {Detail} from './view/Detail/Detail'
import {Home} from './view/Home/Home'
import './styles/index.css'
import { useSelector } from 'react-redux'


function App() {
   const {isDarkMode}=useSelector((state)=>state.country)
   

  return (
  <div className={isDarkMode? 'contentLigth':'contentDark'}>
    <Head/>
    
   <Routes >
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/detail/:ID' element={<Detail/>}/>
    <Route path='/createActivity' element={<ActivityCreate/>}/>
    <Route path='/allActivity' element={<AllActivity/>}/>
   </Routes>
    
   <Footer/>
   
  </div>)
}

export default App
