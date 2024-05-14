import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slice/user/loginSlice'
import profilReducer from './slice/user/profilSlice'
import accountReducer from './slice/account/accountSlice';


const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === 'login/post/fulfilled') {
    const token = action.payload;
    localStorage.setItem('token', token); 
  }
  return result;
};

const combinedReducer = combineReducers({
  login: loginReducer,
  profil: profilReducer,
  account: accountReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    state = undefined;
    localStorage.removeItem('token');
  }
  return combinedReducer(state, action);
};

// TODO: devtools to set to false at production time
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
  devTools: true,
})


export default store;