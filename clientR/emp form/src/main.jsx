import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Login.jsx'
import  {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Link to='/emp' className='Antry'>Database</Link>
      <Link to='/' className='Entry'>Entry</Link>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<App/>} path='/emp'/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
