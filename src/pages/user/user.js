import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import EditProfil from '../../components/editProfil/EditProfil';
import { postAccount } from '../../Redux/slice/account/accountSlice';

import './user.css'
import { useEffect, useState } from 'react';
import Account from '../../components/account/Account';

function User(){
    const dispatch = useDispatch()
    const [totalChecking, setTotalChecking] = useState('');
    const [totalSavings, setTotalSavings] = useState('');
    const [totalCreditCard, setTotalCreditCard] = useState('');
    //state
    const token = useSelector((state) => state.login.token);
    const total = useSelector((state) => state.account.total);

    useEffect(() => {
        dispatch(postAccount(token))
    })
    
    //TODO To modify after having the API route
    useEffect(() => {
        if (total) {
            setTotalChecking((total[0].checking).toLocaleString('en'))
            setTotalSavings((total[0].savings).toLocaleString('en'))
            setTotalCreditCard((total[0].credit).toLocaleString('en'))
        }
    }, [total])

    if(!token){
        return <Navigate to='/sign-in' />
     }
    return(
    <main className="main bg-dark">
    <EditProfil />
    <h2 className="sr-only">Accounts</h2>
    <Account name='Checking (x8349)' argent={totalChecking}  balance='Available' state='checking' />
    <Account name='Savings (x6712)' argent={totalSavings}  balance='Available' state='savings'/>
    <Account name='Credit Card (x8349)' argent={totalCreditCard}  balance='Current' state='creditCard' />
    
    </main>
    )
}

export default User