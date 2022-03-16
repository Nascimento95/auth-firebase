import { useContext } from "react";
import { UserContext } from '../context/userContext';

function SignUpModal() {

    const {modalState, toggleModal} =useContext(UserContext)
    console.log(modalState, toggleModal)
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
                                        <button onClick={() => toggleModal("close")} className="btn-close"></button>
                                    </div>

                                    <div className="modal-body">
                                        <form className="sign-up-form">
                                            <div className="mb-3">
                                                <label htmlFor="signUpEmail" className="form-label" >Email adress</label>
                                                <input 
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
                                                    required
                                                    type="Password" 
                                                    name='Password'
                                                    id="RepeatPassword"
                                                    className="form-control" 
                                                />
                                            </div>
                                            <p className="text-danger mt-1"></p>
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
