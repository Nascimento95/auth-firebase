import { useContext, useRef, useState } from "react";
import { UserContext } from '../context/userContext';
import {useNavigate} from 'react-router-dom'

function SignInModal() {

    const {modalState, toggleModal, signIn} =useContext(UserContext)
    const [validation, setValidation] = useState("")
    // console.log(signUp)
    let navigate = useNavigate()

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            )
            // a tester
            formRef.current.reset()
            setValidation("")
            // console.log(credencial)
            navigate("/private/private-home")
            toggleModal("close")
        } catch (error) {
                // let newFormatErreur = error.code.split("").splice(5,error.code.length).join("").replace('-', ' ').replace('-', ' ').replace('-', ' ')
                // setValidation(newFormatErreur)
                setValidation("email and/or password incorrect")
            // console.dir(error.code)
        }
    }
    const closeModal = () =>{
        setValidation("")
        toggleModal("close")
    }
    return (
        <>
            {modalState.signInModal && 
            
                (<div className="position-absolute bg-dark bg-opacity-50 top-0 vw-100 vh-100">
                    <div className="vw-100 vh-100 ">
                        <div className="position-relative top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Sign In</h5>
                                        <button onClick={closeModal} className="btn-close"></button>
                                    </div>

                                    <div className="modal-body">
                                        <form
                                            ref={formRef}
                                            onSubmit={handleSubmit}
                                            className="sign-up-form"
                                        >

                                            <div className="mb-3">
                                                <label htmlFor="signInEmail" className="form-label" >Email adress</label>
                                                <input 
                                                    ref={addInputs}
                                                    required
                                                    type="email" 
                                                    name='email'
                                                    id="signInEmail"
                                                    className="form-control" 
                                                />
                                            </div>
                                        
                                            <div className="mb-3">
                                                <label htmlFor="signInPassword" className="form-label" >Password</label>
                                                <input 
                                                    ref={addInputs}
                                                    required
                                                    type="Password" 
                                                    name='Password'
                                                    id="signInPassword"
                                                    className="form-control" 
                                                />
                                            </div>

                                            <p className="text-danger mt-1">{validation} </p>
                                            <button className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default SignInModal
