import { useContext, useRef, useState } from "react";
import { UserContext } from '../context/userContext';

function SignUpModal() {

    const {modalState, toggleModal, signUp} =useContext(UserContext)
    const [validation, setValidation] = useState("")
    console.log(signUp)


    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if((inputs.current[1].value.length || inputs.current[2].value.length ) < 6){
            setValidation("6 characters min")
            return
        }
        if(inputs.current[1].value !== inputs.current[2].value){
            setValidation(" password do not match")
            return
        }
        try {
            const credencial = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            formRef.current.reset()
            setValidation("")
            console.log(credencial)
        } catch (error) {
                let newFormatErreur = error.code.split("").splice(5,error.code.length).join("").replace('-', ' ').replace('-', ' ').replace('-', ' ')
                setValidation(newFormatErreur)
            // console.dir(error.code)
        }
        console.log(inputs)
    }
    const closeModal = () =>{
        setValidation("")
        toggleModal("close")
    }
    return (
        <>
            {modalState.signUpModal && 
            
                (<div className="position-absolute bg-dark bg-opacity-50 top-0 vw-100 vh-100">
                    <div className="vw-100 vh-100 ">
                        <div className="position-relative top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Sign Up</h5>
                                        <button onClick={closeModal} className="btn-close"></button>
                                    </div>

                                    <div className="modal-body">
                                        <form
                                            ref={formRef}
                                            onSubmit={handleSubmit}
                                            className="sign-up-form">
                                            <div className="mb-3">
                                                <label htmlFor="signUpEmail" className="form-label" >Email adress</label>
                                                <input 
                                                    ref={addInputs}
                                                    required
                                                    type="email" 
                                                    name='email'
                                                    id="signUpEmail"
                                                    className="form-control" 
                                                />
                                            </div>
                                        
                                            <div className="mb-3">
                                                <label htmlFor="signUpPassword" className="form-label" >Password</label>
                                                <input 
                                                    ref={addInputs}
                                                    required
                                                    type="Password" 
                                                    name='Password'
                                                    id="signUpPassword"
                                                    className="form-control" 
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="RepeatPassword" className="form-label" >Repeat Password</label>
                                                <input 
                                                    ref={addInputs}
                                                    required
                                                    type="Password" 
                                                    name='Password'
                                                    id="RepeatPassword"
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

export default SignUpModal
