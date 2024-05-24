import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

const Transation = ({transaction}) => {
    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faChevronUp} size='2x' />)
 
    useEffect(()=> {
        if(visible) {
            setIcon(<FontAwesomeIcon icon={faChevronDown} size='2x' />)  
        } else {
            setIcon(<FontAwesomeIcon icon={faChevronUp} size='2x' />)
        }
    }, [visible])

    return (
        <tbody>
            <tr key={transaction.id}>
                <td onClick={() => setVisible((prev) => !prev)}>{icon}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>${transaction.balance}</td>
            </tr>
            {visible ? (
                <tr className="visible">
                    <td colSpan={'5'}>
                        <p>Transaction Type : {transaction.type}</p>
                        <p>Category : {transaction.category}</p>
                        <p>Notes : {transaction.notes}</p>
                    </td>
                </tr>
            ) : null}
        </tbody>
        
    )
}

export default Transation