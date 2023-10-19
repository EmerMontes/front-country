import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'


axios.defaults.baseURL = 'https://back-countries.up.railway.app'
//axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)