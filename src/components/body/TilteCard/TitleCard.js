import React from 'react'
import {styled} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputOrLabel from '../../InputOrLabel/InputOrLabel';
import { useSelector,useDispatch } from 'react-redux';
import { updateTitle } from '../../../redux/actions';
import {  IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { addQuestion } from '../../../redux/actions';


function TitleCard() {
    const text= useSelector((state)=>{return state.form.title}) 
    const dispatcher=useDispatch()
    const StyledCard=styled(Card)({
        margin:"0px 0px 10px 0px",
        
    });
    const selectedComponent=useSelector((state)=>{return state.selectedComponentData})
    
    const label=selectedComponent.selectedComponent==="Title"?false:true;
    
    const StyledCardContent=styled(CardContent)({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        lineHeight: "25px",
        flexWrap: "wrap"
    })

    const addQuestionLocal=()=>{
        const question={
            questionId:0,
            question:{
            question:"Question",
            questionType:"MultipleChoice",
            options:["Option Here"]
        }

        }
     
        dispatcher(addQuestion(question))

    }
    
    const changeHandler=(value)=>{
        dispatcher(updateTitle(value))
    }
    return (
        <div className="Card">
        <StyledCard style={{flexGrow:"30"}}>
         <StyledCardContent>
                        <InputOrLabel text={text} changeHandler={changeHandler} label={label} foc={true}/>
        </StyledCardContent>  
        </StyledCard>
        <StyledCard style={{flexGrow:"1", marginLeft:"10px",display:"flex",alignItems:"center",flexDirection:"column"}}>
                <IconButton onClick={addQuestionLocal}>
                <AddCircleOutlineIcon />
                </IconButton>

                
                
                
            </StyledCard>
            </div>
    )
}

export default TitleCard
