import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputOrLabel from '../../InputOrLabel/InputOrLabel';
import './QuestionCard.css';
import {styled} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {  IconButton } from '@material-ui/core';
import SelectionComponent from './SelectionComponent/SelectionComponent';
import MutlipleChoice from './MultipleChoice/MutlipleChoice';
import CheckBox from './CheckBox/CheckBox';
import Answer from './Answer/Answer';
import FileUpload from './FileUpload/FileUpload';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { addQuestion, deleteQuestion, updateQuestion, updateSelectionComponent } from '../../../redux/actions';
import { useDispatch,useSelector } from 'react-redux';

function QuestionCard(props) {
    const dispatcher=useDispatch()
    const text= useSelector((state)=>{return state.form.questions[props.id].question}) 
    const StyledCard=styled(Card)({
        margin:"0px 0px 10px 0px",
        
    });

    const StyledCardContent=styled(CardContent)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        lineHeight: "25px",
        flexWrap: "wrap"
    })
    
    const addQuestionLocal=()=>{
        const question={
            questionId:props.id+1,
            question:{
            question:"Question",
            questionType:"MultipleChoice",
            options:["optionHere"]
        }

        }
     
        dispatcher(addQuestion(question))

    }
    const changeHandler=(value)=>{
        dispatcher(updateQuestion(props.id,value))
        dispatcher(updateSelectionComponent("Question",props.id,null))
    }

    const deleteQuestion1=()=>{
        dispatcher(deleteQuestion(props.id))
    }
    
    const selectedComponent=useSelector((state)=>{return state.selectedComponentData})
    
    const label=selectedComponent.selectedComponent==="Question" && selectedComponent.questionId===props.id?false:true;
    
    const foc=selectedComponent.optionId===null?true:false;


    const {answerType}=props;
    const {options}=props
   
    let Component;
    switch(answerType){
        case 'MultipleChoice':
            Component=<MutlipleChoice options={options} id={props.id} label={label}/>
        break
        case 'CheckBox':
            Component= <CheckBox options={options} id={props.id} label={label}/>
        break
        case 'Answer':
            Component=<Answer id={props.id}/>
        break
        case 'FileUpload':
            Component=<FileUpload id={props.id}/>
        break
        default:
            Component=<MutlipleChoice options={options} id={props.id}/>
    }
    return (
        <div className="Card">
           <StyledCard style={{flexGrow:"30"}}>
            <StyledCardContent>
                <InputOrLabel text={text} label={false} width="300px" changeHandler={changeHandler} label={label} foc={foc}/>
                <SelectionComponent id={props.id} type={answerType}/>
            </StyledCardContent>   
            <CardContent>
                {Component}
            </CardContent>
            </StyledCard>
            <StyledCard style={{flexGrow:"1", marginLeft:"10px",display:"flex",alignItems:"center",flexDirection:"column"}}>
            <IconButton onClick={addQuestionLocal}>
                <AddCircleOutlineIcon />
                </IconButton>

                <IconButton onClick={deleteQuestion1}>
                <HighlightOffOutlinedIcon />
                </IconButton>
                
                
            </StyledCard>
    </div>
    )
}

export default QuestionCard
