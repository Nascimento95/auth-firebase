import { createContext, useState, useEffect } from "react";
import SignUpModal from '../components/SignUpModal';


export const UserContext = createContext()

export function UserContextProvider(props) {

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
        <UserContext.Provider value={{modalState, toggleModal}}>
            {props.children}
        </UserContext.Provider>
    )
}

