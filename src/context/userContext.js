import { createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import {auth} from '../firebase.config'


export const UserContext = createContext()

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

    const signUp = (email, password) => createUserWithEmailAndPassword (auth, email, password)


    // partie modal
    const [modalState, setModalState] =useState({
        signUpModal: false,
        signInModal: false
    })
    
    const toggleModal = modal => {
        if(modal === "signIn"){
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === "signUp"){
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === "close"){
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    }
    
    return (
        <UserContext.Provider value={{modalState, toggleModal, signUp}}>
            {props.children}
        </UserContext.Provider>
    )
}

