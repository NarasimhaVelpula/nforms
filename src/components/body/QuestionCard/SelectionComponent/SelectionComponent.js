import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckBoxRoundedIcon from '@material-ui/icons/CheckBoxRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { useDispatch } from 'react-redux';
import { updateQuestionType } from '../../../../redux/actions';

export default function SelectionComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const type=props.type;
  const open = Boolean(anchorEl);
  const dispatcher=useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
  
    dispatcher(updateQuestionType(props.id,value))
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            {type} <ArrowDropDownCircleOutlinedIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={(e)=>{handleClose("MultipleChoice")}} name="MultipleChoice"><RadioButtonCheckedIcon />Multiple Choice</MenuItem>
        <MenuItem onClick={(e)=>{handleClose("CheckBox")}} name="CheckBox"><CheckBoxRoundedIcon />Checkbox</MenuItem>
        <MenuItem onClick={(e)=>{handleClose("FileUpload")}} name="FileUpload"><PublishRoundedIcon />File Upload</MenuItem>
        <MenuItem onClick={(e)=>{handleClose("Answer")}} name="Answer"><TextFieldsIcon />Answer Text</MenuItem>

      </Menu>
    </div>
  );
}
