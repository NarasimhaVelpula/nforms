import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../../redux/actions'


function Color() {
    const color=useSelector((state)=>{return(state.form.theme)})
    const dispatcher=useDispatch()
    const changeHandler=(e)=>{
        console.log("handling")
        dispatcher(changeColor(e.target.value))
    }
    return (
      <input type="color" id="favcolor" name="favcolor" value={color} onChange={changeHandler} />
    )
}

export default Color
