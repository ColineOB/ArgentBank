import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import EditProfil from '../../components/editProfil/EditProfil';
import { postAccount } from '../../Redux/slice/account/accountSlice';

import './user.css'
import { useEffect, useState } from 'react';
import Account from '../../components/account/Account';

function User(){
    const dispatch = useDispatch()
    //state
    const token = useSelector((state) => state.login.token);
    const total = useSelector((state) => state.account.total);

    useEffect(() => {
        dispatch(postAccount(token))
    })
    
    console.log(total);
    if(!token){
        return <Navigate to='/sign-in' />
     } else if (total){
        return(
        <main className="main bg-dark">
        <EditProfil />
        <h2 className="sr-only">Accounts</h2>
        
        {total.map( t => (
        <Account name={t.name} argent={t.argent}  balance={t.balance} state={t.type} />
                    ))}
        
        </main>
        )

     }
}

export default User