import React from 'react'

function SignUpModal() {


    return (
        <>
            <div className="position-fixe top-0 vw-100 vh-100">
                <div className="w-100 h-100 bg-dark bg-opacity-75">
                    <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Sign Up</h5>
                                    <button className="btn-close"></button>
                                </div>

                                <div className="modal-body">
                                    <form className="sign-up-form">
                                        <div className="mb-3">
                                            <label htmlFor="signUpEmail">Email adress</label>
                                            <input 
                                                required
                                                type="email" 
                                                name='email'
                                                id="signUpEmail"
                                                className="form-control" 
                                            />
                                        </div>
                                       
                                        <div className="mb-3">
                                            <label htmlFor="signUpPassword">Password</label>
                                            <input 
                                                required
                                                type="Password" 
                                                name='Password'
                                                id="signUpPassword"
                                                className="form-control" 
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="signUpPassword">Password</label>
                                            <input 
                                                required
                                                type="Password" 
                                                name='Password'
                                                id="signUpPassword"
                                                className="form-control" 
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpModal
