import { UserContext } from '../context/userContext';
import { useContext } from 'react';

function Home() {

    const {currentUser} = useContext(UserContext)

    return (
        <div className='container p-5 text-center'>
            <h1 className='display-2 text-light'>
                {currentUser ? "welcome bro" : "hi,Sign Up or Sign In"}
            </h1>
        </div>
    )
}

export default Home
