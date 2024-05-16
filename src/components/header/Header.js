import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Redux/slice/user/loginSlice'
import './header.css'
import { useEffect, useState } from 'react'

const Header = () => {
    const dispatch = useDispatch()
    const [userFirstName, setUserFirstName] = useState('')
    const token = useSelector((state) => state.login.token);
        //store
    const profil = useSelector((state) => state.profil.profil)

    useEffect(() => {
        if(profil) {
            setUserFirstName(profil.firstName);
        }
    },[profil])

    
    return (
        <div className="header">
            <Link to='/'>
                <img className='header_logo' alt='logo' src={logo} />
            </Link>
            {token?
            <div className='header_connexion'>
                <Link to="/user" className='header_connexion'>
                    <FontAwesomeIcon icon={faUserCircle} size='1x' />
                    <p>{userFirstName}</p>
                </Link>
                <button onClick={() => dispatch(logout())}>
                    <FontAwesomeIcon icon={faUserCircle} size='1x' />
                    <p>Sign Out</p>
                </button>
            </div>
            :
            <Link to="/sign-in" className='header_connexion'>
                <FontAwesomeIcon icon={faUserCircle} size='1x' />
                <p>Sign In</p>
            </Link>
            }
            
        </div>
    )
}

export default Header