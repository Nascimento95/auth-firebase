import {useContext} from 'react'
import { UserContext } from '../../context/userContext';
import {Outlet, Navigate} from 'react-router-dom'
//Outlet pour les route imbriquer 
function Private() {

    const {currentUser} = useContext(UserContext)

    if(!currentUser){
        return <Navigate to= "/" />
    }


    return (
        <div className='container'>
            <Outlet />
        </div>
    )
}

export default Private
