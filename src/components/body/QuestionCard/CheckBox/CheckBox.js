import React from 'react'
import Option from './Option'
import { useDispatch } from 'react-redux'
import { addOption } from '../../../../redux/actions'

import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
function CheckBox(props) {
    let {value}=props
    let questionId=props.id
    let {label}=props
    let {options}=props
    
    const dispatcher=useDispatch()
    const addOption1=()=>{
        dispatcher(addOption({id:questionId,value:"option Here"}))
    }
    return (
        <div>
             {options.map((opt,id)=>{
                return(<Option value={opt} optionId={id} questionId={questionId} label={label}/>)
            })}
            <label className="option" onClick={addOption1}> <CheckBoxOutlineBlankOutlinedIcon />  Add Option</label>
        </div>
    )
}

export default CheckBox
