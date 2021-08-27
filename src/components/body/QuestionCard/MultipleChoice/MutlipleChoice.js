import React from 'react'
import Option from './Option'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import { useDispatch } from 'react-redux'
import { addOption } from '../../../../redux/actions'

function MutlipleChoice(props) {
    let {value}=props
    let questionId=props.id
    let {label}=props
    let {options}=props
    const dispatcher=useDispatch()
    const addOption1=()=>{
        dispatcher(addOption({id:questionId,value:"option Here"}))
    }
    return (
        <div class="multipleChoice">
            {options.map((opt,id)=>{
                return(<Option value={opt} optionId={id} questionId={questionId} label={label}/>)
            })}
            <label className="option" onClick={addOption1}> <RadioButtonUncheckedRoundedIcon />  Add Option</label>
        </div>
    )
}

export default MutlipleChoice
