import update from 'react-addons-update';

const initialState={
    id:"",
    theme:"",
    title:"Untitled Form",
    questions:[]
}

const formReducer=(state=initialState,action)=>{
    let newState={...state}
    switch(action.type){
        case 'UPDATEFORMID':
            return{...state,id:action.payload}
        case 'UPDATEFORM':
            return {...action.payload,id:action.payload._id}
        case 'UPDATETITLE':
            newState.title=action.payload
            return newState;
        case 'ADDQUESTION':
            var questions=[...newState.questions]
            questions.splice(action.payload.questionId,0,action.payload.question)
            return {...state,questions};
        
        case 'UPDATEQUESTION':
            return update(state, { 
                questions: { 
                  [action.payload.questionId]: {
                    question: {$set: action.payload.question}
                  }
                }
              });  
        case 'UPDATEQUESTIONTYPE':
            return update(state, { 
                questions: { 
                  [action.payload.questionId]: {
                    questionType: {$set: action.payload.questionType}
                  }
                }
              }); 
        case 'DELETEQUESTION':
            var questions=[...state.questions]
           
            questions.splice(action.payload,1)
            return {...state,questions} 
        case 'ADDOPTION':
            var options=[...state.questions[action.payload.id].options]
            options.push(action.payload.value)
            return update(state, { 
                questions: { 
                  [action.payload.id]: {
                    options:{$set:options}
                  }
                }
              }); 
        case 'UPDATEOPTION':
            var options=[...state.questions[action.payload.id].options]
            options[action.payload.optionId]=action.payload.value
            return update(state, { 
                questions: { 
                  [action.payload.id]: {
                    options:{$set:options}
                  }
                }
              }); 
        case 'DELETEOPTION':
            var options=[...state.questions[action.payload.questionId].options]
            
            options.splice(action.payload.optionId,1)
            return update(state, { 
                questions: { 
                  [action.payload.questionId]: {
                    options:{$set:options}
                  }
                }
              }); 
        case 'CHANGECOLOR':
            return {...state, theme:action.payload}
        default:
            return state;

    }
}

export default formReducer