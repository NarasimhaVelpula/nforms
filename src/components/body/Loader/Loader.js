import React from 'react'
import loader from './jumpingSquares.gif'
function Loader() {
    return (
        <div style={{width:"100%",overflow:"hidden"}}>
            <center><h1>Loading. . . </h1>
            <img src={loader} />
            </center>
        </div>
    )
}

export default Loader
