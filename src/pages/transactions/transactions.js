import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { postTransactions } from '../../Redux/slice/account/transactionsSlice';

function Transations() {
    const dispatch = useDispatch()
    const [queryParameter] = useSearchParams()
    //state
    const transactions = useSelector((state)=> state.transactions.list)
    console.log(transactions);

    useEffect(()=> {
        if (queryParameter) {
            dispatch(postTransactions(queryParameter.get("type")))
        }
    },[])

    return (
        <>
        </>
    )
}

export default Transations