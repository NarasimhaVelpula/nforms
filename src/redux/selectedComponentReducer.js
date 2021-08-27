const initialState={
    selectedComponent:"Title",
    questionId:null,
    optionId:null
}

const selectedComponentReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'UPDATESELECTIONCOMPONENT':
            return {selectedComponent:action.payload.component,questionId:action.payload.questionId,optionId:action.payload.optionId}
        default:
            return state;
    }

}
export default  selectedComponentReducer