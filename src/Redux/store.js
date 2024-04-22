import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slice/login/loginSlice'

const combinedReducer = combineReducers({
  login: loginReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

// TODO: devtools to set to false at production time
export default configureStore({
  reducer: rootReducer,
  devTools: true,
})