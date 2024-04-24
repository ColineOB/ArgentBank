import './signIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { postLogin} from '../../Redux/slice/user/loginSlice'
import { Navigate } from 'react-router-dom'

function SignIn(){
    const dispatch = useDispatch()
    // state
    const [username, setUsername] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // store
    const token = useSelector((state) => state.login.token);
    const error = useSelector((state) => state.login.error);

    useEffect(()=> {
        console.log(error);
         if (error) {
            setErrorVisible(true)
            if (error === 400) {
                setErrorMessage('Username or password incorrect.')
            } else if (error === 500) {
                setErrorMessage('Internal Server Error. Please try again later.')
            }
        }
    },[error])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorVisible(false);
        dispatch(postLogin({ "email": username, "password": password }))
    }
    if(token){
       return <Navigate to='/user' />
    }
    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} size='1x' />
                <h1>Sign In</h1>
                <form >
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" value={username} />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" value={password} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                {errorVisible && <div className="error-message">{errorMessage}</div>}
                <button onClick={handleSubmit} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn