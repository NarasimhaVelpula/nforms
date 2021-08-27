import Header from './components/header/Header'

import './App.css'
import { useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { useState } from 'react';
import RoutingPage from './components/RoutingPage';

function App() {
  
  const color=useSelector((state)=>{return(state.form.theme)})
  document.body.style.background=color;
  const [authToken,setAuthToken]=useState(localStorage.getItem('auth-token'))
  const handleSubmit=(token)=>{
    setAuthToken(token)
  }

  return (
    <div className="App">
      <Header />
      {authToken?<RoutingPage />:<Login handleSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;
