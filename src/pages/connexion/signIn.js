import './signIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { postLogin} from '../../Redux/slice/login/loginSlice'

function SignIn(){
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(postLogin({ data: 'test' }))
    },)

    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} size='1x' />
                <h1>Sign In</h1>
                <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                
                <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn