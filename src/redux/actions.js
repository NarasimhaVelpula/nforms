export const updateFormId=(id)=>{
    return({
        type:"UPDATEFORMID",
        payload:id
    })
}

export const updateForm=(load)=>{
    return({
        type:"UPDATEFORM",
        payload:load
    })
}

export const addQuestion=(load)=>{
   
    return({
        type:"ADDQUESTION",
        payload:load
    })
}

export const updateQuestion=(id,question)=>{
    return({
        type:"UPDATEQUESTION",
        payload:{
            questionId:id,
            question:question
        }
    })
}

export const updateQuestionType=(id,type)=>{
    console.log(type)
    return({
        type:"UPDATEQUESTIONTYPE",
        payload:{
            questionId:id,
            questionType:type
        }
    })
}

export const deleteQuestion=(load)=>{
    return({
        type:"DELETEQUESTION",
        payload:load
    })
}

export const addOption=(load)=>{
  
    return({
        type:"ADDOPTION",
        payload:load
    })
}

export const updateOption=(load)=>{
    return({
        type:"UPDATEOPTION",
        payload:load
    })
}

export const updateTitle=(title)=>{
    return({
        type:"UPDATETITLE",
        payload:title
    })
}

export const deleteOption=(load)=>{
   
    return({
        type:"DELETEOPTION",
        payload:load
    })
}

export const changeColor=(load)=>{
    return({
        type:"CHANGECOLOR",
        payload:load
    })
}

export const updateSelectionComponent=(component,questionId,optionId)=>{
    return(
        {
            type: "UPDATESELECTIONCOMPONENT",
            payload:{
                component:component,
                questionId:questionId,
                optionId:optionId
            }
        }
    )
}