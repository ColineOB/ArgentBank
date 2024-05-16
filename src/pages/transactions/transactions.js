import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { postTransactions } from '../../Redux/slice/account/transactionsSlice';
import Transation from '../../components/transaction/Transaction';
import TotalTransaction from '../../components/totalTransaction/TotalTransaction';

function Transations() {
    const dispatch = useDispatch()
    const [queryParameter] = useSearchParams()
    //state
    const transactions = useSelector((state)=> state.transactions.list)
    console.log(transactions);

    useEffect(()=> {
        const type = queryParameter.get('type');

        if (queryParameter) {
            dispatch(postTransactions(type))
        }
    },[])

    if(!transactions){
        return <Navigate to='/sign-in' />
     }
    return (
        <>
            <TotalTransaction />
            <table>
                <tr>
                    <th></th> 
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
                {transactions.map( t => (
                    <Transation transaction={t} />
                ))}
            </table>
        </>
    )
}

export default Transations