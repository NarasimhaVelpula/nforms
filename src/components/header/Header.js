import React from 'react'
import logo from './logo.PNG'
import './Header.css'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { Collapse, IconButton } from '@material-ui/core';
import copy from "copy-to-clipboard"; 
import {Button} from '@material-ui/core';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Color from './Color'
import { useSelector } from 'react-redux';

function Header(props) {
    const formId=useSelector((state)=>{return state.form.id})
    
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} height="90px" />
            </div>
           {formId!==""? <div className="leftSide">
              
                <IconButton>
                    <Color />
                </IconButton>
                <a href={"https://n-forms-display-form.vercel.app/"+formId} target="_blank">

                
                <IconButton >
                    <VisibilityOutlinedIcon />
                </IconButton>
                </a>
                
                
                <Button variant="contained" color="primary" onClick={()=>{
                    let url="http://localhost:3001/"+formId
                    copy(url)
                    alert("copied")
                    }} >
                Copy Link
                </Button>
            </div>:<></>}
            
        </div>
    )
}

export default Header
