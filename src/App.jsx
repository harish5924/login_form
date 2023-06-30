import React, { useState } from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import "./App.css"

const App = () => {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forname) => {
    setCurrentForm(forname);
  }

  return (
    <div className='App'>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }
    </div>
  )
}

export default App