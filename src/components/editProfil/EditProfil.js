import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { postProfil, putProfil } from '../../Redux/slice/user/profilSlice'

import './editProfil.css'

const EditProfil = () => {
    const dispatch = useDispatch()
    //state
 const [edit, setEdit] = useState(false)
 const [userFirstName, setUserFirstName] = useState('')
 const [userLastName, setUserLastName] = useState('')
    //store
 const profil = useSelector((state) => state.profil.profil)

 useEffect(()=>{
     dispatch(postProfil())
 },[])
 
useEffect(() => {
    if(profil) {
        setUserFirstName(profil.firstName);
        setUserLastName(profil.lastName)
    }
},[profil])

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putProfil({"firstName": userFirstName, "lastName": userLastName }))
}

    if(edit){
        return (
            <div className="headerUser">
                <h1>Welcome back</h1>
                <input onChange={(e) => setUserFirstName(e.target.value)} type="text" id="firstname" value={userFirstName} />
                <input onChange={(e) => setUserLastName(e.target.value)} type="text" id="lastname" value={userLastName} />
                <button onClick={handleSubmit} className="save-button">Save</button>
                <button onClick={() => setEdit(false)} className="cancel-button">Cancel</button>
            </div>
        )
    }
    return (
        <div className="headerUser">
            <h1>Welcome back<br /> {userFirstName} {userLastName} !</h1>
            <button onClick={() => setEdit(true)} className="edit-button">Edit Name</button>
        </div>
    )
}

export default EditProfil