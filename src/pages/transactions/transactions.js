import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { postTransactions } from '../../Redux/slice/account/transactionsSlice';
import Transation from '../../components/transaction/Transaction';
import TotalTransaction from '../../components/totalTransaction/TotalTransaction';
import "./transactions.css"

function Transations() {
    const dispatch = useDispatch()
    const [queryParameter] = useSearchParams()
    //state
    const token = useSelector((state) => state.login.token);
    const transactions = useSelector((state)=> state.transactions.list)

    useEffect(()=> {
        const type = queryParameter.get('type');

        if (queryParameter) {
            dispatch(postTransactions(type))
        }
    },[])

    if(!token){
        return <Navigate to='/sign-in' />
     }
    if(!transactions) {
        return <h1>Please Wait</h1>
    }
    return (
        <main className="main bg-dark transactions">
            <TotalTransaction />
            <table className=''>
                <thead>
                    <tr>
                        <th></th> 
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                {transactions.map( t => (
                    <Transation transaction={t} />
                ))}
            </table>
        </ main>
    )
}

export default Transations