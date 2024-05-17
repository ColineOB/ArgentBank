import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../Redux/slice/user/loginSlice';

function TokenChecker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      dispatch(postLogin.fulfilled(token));
    }
  }, [dispatch]);

  return null;
}

export default TokenChecker;