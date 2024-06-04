import './signIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { postLogin} from '../../Redux/slice/user/loginSlice'
import { Navigate } from 'react-router-dom'

function SignIn(){
    const dispatch = useDispatch()
    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // store
    const token = useSelector((state) => state.login.token);
    const error = useSelector((state) => state.login.error);

    let errorMsg = ''
    if (error === 400) {
        errorMsg = 'Username or password incorrect.'
    } else if (error === 500) {
        errorMsg = 'Internal Server Error. Please try again later.'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                {errorMsg && <div className="error-message">{errorMsg}</div>}
                <button onClick={handleSubmit} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn