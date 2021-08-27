import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import axios from 'axios'
import TitleCard from './TilteCard/TitleCard';
import QuestionCard from './QuestionCard/QuestionCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm, updateSelectionComponent } from '../../redux/actions';
import Loader from './Loader/Loader';
import ServerUrl from '../../ServerUrl'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Body() {
    const form=useSelector((state)=>state.form)
    const [toggle,setToggle]=useState(false)
    const dispatcher=useDispatch()

    const questions=form.questions;
    // This is to get auth token attach to axios calls
    // const 
    // const authToken=localStorage.getItem('auth-token')
    // console.log("Loading", authToken)
    const selectedQuestion=useSelector((state)=>{return state.selectedComponentData.questionId})
    const authToken=localStorage.getItem('auth-token')
   
     useEffect(()=>{
        const url=ServerUrl+'getForm';
        axios.post(url,{formId:form.id,authToken:authToken}).then((response)=>{
            dispatcher(updateForm(response.data))
            console.log(response.data)
            setToggle(true)
        })
         
     },[])     
           
     if(toggle===true)
     {
            const url=ServerUrl+'updateForm'
             axios.post(url,{
                formId:form.id,
                authToken:authToken,
                form:{
                    title:form.title,
                    questions:form.questions,
                    theme:form.theme,
                }
            }).then((res)=>{console.log(res)}).catch((E)=>{console.log(E)})
      
    
  
    
    
   
    
    return (
        <div style={{ height: "90%", paddingTop:"10px"}}>
            <Link to="/response">
            <Button variant="contained" color="secondary" style={{float:"right",display:"inline"}}
            
            >
                    Show Responses
            </Button>
            </Link>
            <Container maxWidth="md">
                <div onClick={()=>{dispatcher(updateSelectionComponent("Title",null,null))}}><TitleCard /></div>
                {questions.map((question,id)=>{
                    if(id!==selectedQuestion)
                    {
                    return(
                       <div onClick={()=>{dispatcher(updateSelectionComponent("Question",id,null))}}>
                        <QuestionCard answerType={question.questionType} id={id} options={question.options}/>
                        </div>
                    )
                    }
                    else{
                        return(
                            <QuestionCard answerType={question.questionType} id={id} options={question.options}/>
                        )
                    }
                })}
                
                

                

            </Container>
        </div>
        
    )
}

else{
    return(
    <Loader />)
}
}

export default Body
