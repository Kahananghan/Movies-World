import  React  from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from'react-router-dom'
import { Store } from './Store/Store.jsx'
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={Store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </Provider>  

);
