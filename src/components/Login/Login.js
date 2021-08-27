import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import Serverurl from '../../ServerUrl'
function Login(props) {
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
    const url=Serverurl+"api/auth/login"
    axios.post(url,{
        username:userName,
        password:password
    }).then(res=>{
        localStorage.setItem('auth-token',res.data.token)
        props.handleSubmit(res.data.token)
    }).catch(err=>{
        console.log(err)
    })
}
    return (
        <form class="box"  >
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
        <input type="password" name="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}} />
        <input type="button" name="" value="Login" onClick={handleSubmit} />
      </form>
    )
}

export default Login
