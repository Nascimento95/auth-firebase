
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../context/userContext';
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { auth } from '../firebase.config';

function NavBar() {

    const {toggleModal} =useContext(UserContext)

    let navigate = useNavigate()

    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        } catch {
            alert("For some reasons we can't deconnect, please check your internet connexion and retry")
        }
    }

    return (
        <nav className='navbar navbar-light bg-light px-4'>
            <Link to="/" className='navbar-brand'>
                AuthJS
            </Link>
            <div>
                <button 
                    onClick={() => toggleModal("signUp")} 
                    className="btn btn-primary"
                >
                    Sign Up    
                </button>
                <button 
                    onClick={() => toggleModal("signIn")} 
                    className="btn btn-primary mx-2"
                >
                    Sign In    
                </button>
                <button 
                    onClick={logOut} 
                    className="btn btn-danger"
                >
                    Log Out    
                </button>
            </div>
        </nav>
    )
}

export default NavBar
