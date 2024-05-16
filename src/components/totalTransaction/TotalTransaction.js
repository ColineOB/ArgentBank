import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

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
        <div>
            <h1>{account.name}</h1>
            <p>Argent: ${account.argent.toLocaleString('en')}</p>
            <p>Balance: {account.balance}</p>
            </div>
        ) : (
            <p>No account found for the specified type.</p>
        )}
        </>
    )
}

export default TotalTransaction