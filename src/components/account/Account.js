import { useNavigate } from 'react-router-dom'
import './account.css'

const Account = ({name, argent, balance, state}) => {
    const navigate = useNavigate();

    return (
        <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank {name}</h3>
            <p className="account-amount">${argent}</p>
            <p className="account-amount-description">{balance} Balance</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => navigate({ pathname: '/transactions', search:`?type=${state}`})}>View transactions</button>
        </div>
    </section>
    )
}

export default Account