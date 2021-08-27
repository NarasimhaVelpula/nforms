import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import {styled} from '@material-ui/core/styles';
import './InputLabel.css'
import { Select } from '@material-ui/core';

function InputOrLabel(props) {
    const StyledTextField=styled(TextField)({
        width:"100%",
        maxWidth:"550px",
        margin:"10px"
    })
    const [text,setText]=useState(props.text)
    
    const foc=props.foc
    const handleChange=(E)=>{
        E.preventDefault();
        

        props.changeHandler(E.target.value)
        
    
    }
    if(props.label)
    {
        return(
            <p className="Label">{text}</p>
        )
    }
    else{
    return (
            <StyledTextField value={text} fullWidth onChange={handleChange} autoFocus={foc} onClick={(e)=>{e.target.select()}} />
    )
    }
}

export default InputOrLabel
