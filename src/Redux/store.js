import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slice/user/loginSlice'
import profilReducer from './slice/user/profilSlice'

const combinedReducer = combineReducers({
  login: loginReducer,
  profil: profilReducer
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