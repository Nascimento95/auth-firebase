
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from '../context/userContext';

function NavBar() {

    const {toggleModal} =useContext(UserContext)

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
                    className="btn btn-primary"
                >
                    Sign In    
                </button>
                <button 
                    onClick={() => toggleModal("close")} 
                    className="btn btn-danger"
                >
                    Log Out    
                </button>
            </div>
        </nav>
    )
}

export default NavBar
