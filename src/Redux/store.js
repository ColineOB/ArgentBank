import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slice/user/loginSlice'
import profilReducer from './slice/user/profilSlice'
import accountReducer from './slice/account/accountSlice';
import transactionsReducer from './slice/account/transactionsSlice';


const sessionStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type === 'login/post/fulfilled') {
    const token = action.payload;
    sessionStorage.setItem('token', token); 
  }
  return result;
};

const combinedReducer = combineReducers({
  login: loginReducer,
  profil: profilReducer,
  account: accountReducer,
  transactions: transactionsReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    state = undefined;
    sessionStorage.removeItem('token');
  }
  return combinedReducer(state, action);
};

// TODO: devtools to set to false at production time
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sessionStorageMiddleware),
  devTools: true,
})


export default store;