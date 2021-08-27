import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formReducer'
import selectedComponentReducer from './selectedComponentReducer'
export default configureStore({
  reducer: {
      form: formReducer,
      selectedComponentData: selectedComponentReducer 
  },
})