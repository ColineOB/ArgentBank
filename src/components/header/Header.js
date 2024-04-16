import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

    return (
        <div className="header">
            <Link to='/'>
                <img className='header_logo' alt='logo' src={logo} />
            </Link>
            <Link to="/sign-in" className='header_connexion'>
                <FontAwesomeIcon icon={faUserCircle} size='1x' />
                <p>Sign In</p>
            </Link>
        </div>
    )
}

export default Header