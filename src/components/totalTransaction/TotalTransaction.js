import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import './totalTransaction.css'

const TotalTransaction = () => {
    const [queryParameter] = useSearchParams();
    const [account, setAccount] = useState(null);
    // state
    const total = useSelector((state) => state.account.total);

    useEffect(() => {
        const type = queryParameter.get('type');
        if (type) {
          const foundAccount = total.find(item => item.type === type);
          setAccount(foundAccount);
        }
      }, [queryParameter]);

    return (
        <>
             {account ? (
            <div className='totalTransaction'>
                <h1>Argent Bank {account.name}</h1>
                <p className='argent'>${account.argent.toLocaleString('en')}</p>
                <p className='balance'>{account.balance} Balance</p>
            </div>
        ) : (
            <p>No account found for the specified type.</p>
        )}
        </>
    )
}

export default TotalTransaction