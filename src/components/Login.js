import React from 'react'
import '../App.css';

const Login = () => {
    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <div className="button-container">
                    <button type="submit" className="registerbtn">Login</button>
                    </div>
                    <div className="container-signin">
                        <p>Don't an account Register here. <a href="Register"><p1><b>Register</b></p1></a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login