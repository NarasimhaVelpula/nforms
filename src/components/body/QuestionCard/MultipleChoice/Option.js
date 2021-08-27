import React from 'react'

import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { IconButton } from '@material-ui/core';
import InputOrLabel from '../../../InputOrLabel/InputOrLabel';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import './MultipleChoice.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOption, updateOption, updateSelectionComponent } from '../../../../redux/actions';

function Option(props) {
    let {value}=props
    let {optionId}=props
    let label=props.label
    let {questionId}=props  
    const dispatcher=useDispatch()
    const selectedComponent=useSelector((state)=>{return state.selectedComponentData})
    const foc=selectedComponent.optionId===optionId?true:false;

    const deleteOption1=()=>{
        dispatcher(deleteOption({questionId,optionId}))
    }
   
    const handleChange=(value)=>{
        dispatcher(updateOption({id:questionId,optionId:optionId,value:value}))
        dispatcher(updateSelectionComponent("Question",questionId,optionId))
    }

    return (
        <div className="option">
            <RadioButtonUncheckedRoundedIcon /> <InputOrLabel text={value} label={label} changeHandler={handleChange} foc={foc} /><IconButton onClick={deleteOption1}><DeleteForeverRoundedIcon /></IconButton>
        </div>
    )
}

export default Option
