import logo from '../../assets/img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'

const Header = () => {

    return (
        <div className="header">
            <img alt='logo' src={logo} />
            <div className='connexion'>
            <FontAwesomeIcon icon={faUserCircle} size='2x' />

            </div>
        </div>
    )
}

export default Header