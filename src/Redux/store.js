import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slice/login/loginSlice'

// TODO: devtools to set to false at production time
export default configureStore({
  reducer: {
    login: loginReducer
  },
  devTools: true,
})