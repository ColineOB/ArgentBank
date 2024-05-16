import { useState } from "react";


const Transation = ({transaction}) => {
    const [visible, setVisible] = useState(false)
    console.log(transaction);

    return (
        <>
            <tr key={transaction.id}>
                <td onClick={() => setVisible((prev) => !prev)}>/</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
            </tr>
            {visible ? (
                <tr>
                    <td colSpan={'5'}>
                        <p>Transaction Type : {transaction.type}</p>
                        <p>Category : {transaction.category}</p>
                        <p>Notes : {transaction.notes}</p>
                    </td>
                </tr>
            ) : null}
        </>
        
    )
}

export default Transation