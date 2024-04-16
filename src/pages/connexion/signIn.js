import './signIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'

function SignIn(){

    return (
        <main className='main bg-dark'>
            <section class="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} size='1x' />
                <h1>Sign In</h1>
                <form>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                
                <button class="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignIn