import React, { useState, useEffect, uid } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
const Register = () => {

    const [Names, setNames] = useState([]);
    const [Telephone, setTelephone] = useState([]);
    const [Position, setPosition] = useState([]);
    const [Email, setEmail] = useState([]);
    const [Password, setPassword] = useState([]);
    const [Rpassword, setRepeatPassword] = useState([])
    const [Employees, getEmployees] = useState([]);
    const api = "http://localhost:3004/employees";

    

    // const getPosts = async () =>{

    //     axios.post("http://localhost:3004/employees",)
    //     .then(response => this.setState({ articleId: response.data.id }));
    // }


    // console.log(Employees);
    function nameHandler(e) {
        setNames(e.target.value);
        console.log(e.target.value)
    }


    function telephoneHandler(e) {
        setTelephone(e.target.value);
    }

    function positionHandler(e) {
        setPosition(e.target.value);
    }

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function repeatPasswordHandler(e) {
        setRepeatPassword(e.target.value);
    }

  async  function submitHandler(e){
        e.preventDefault();
        const data={
          Names,
          Telephone,
          Position,
          Email,
          Password,
          Rpassword
          
    }
    

    const  response=await axios.post("http://localhost:3004/employee",data).then(res=>console.log(res))
}

    // const onSubmit = () => {
    //     axios.post(api, {
    //         id: uid(),
    //         names: Names,
    //         telephone: telephoneHandler,
    //         position: positionHandler,
    //         email: emailHandler,
    //         password: passwordHandler,
    //         RPassword: repeatPasswordHandler
    //     })
    // }

    return (
        <>
            <form className='form2' >
                <div className="container2">
                    {/* <h1>Register</h1> */}
                    <p><u>Employee Registration form</u></p>
                    <div className='name'>
                        <label><b>Names</b></label>
                        <input type="text" value={Names} placeholder="Enter Names" name="names" onChange={nameHandler} id="names" require />
                    </div><br />
                    <div className='phone'>
                        <label><b>Telephone</b></label>
                        <input type="text" value={Telephone} placeholder="Enter Number" name="number" onChange={telephoneHandler} id="number" require />
                    </div><br />
                    <div className='position'>
                        <label><b>Position</b></label>
                        <input type="text" value={Position} placeholder="Enter Position" name="position" onChange={positionHandler} id="position" require />
                    </div><br />
                    <div className='email'>

                        <label><b>Email</b></label>
                        <input type="text" value={Email} placeholder="Enter Email" name="email" onChange={emailHandler} id="email" require />
                    </div><br />
                    <div>

                        <label><b>Password</b></label>
                        <input type="password" value={Password} placeholder="Enter Password" name="psw" onChange={passwordHandler} id="psw" required />
                    </div><br />
                    <div>

                        <label><b>Repeat Password</b></label>
                        <input type="password" value={Rpassword} placeholder="Repeat Password" name="psw-repeat" onChange={repeatPasswordHandler} id="psw-repeat" required />
                    </div><br />
                    <div>

                        <button type="submit" className="registerbtn" onClick={submitHandler}>Register</button>
                    </div><br />


                    <div className="container-signin">
                        <p>Already have an account? <a href="login"><p1>Login in</p1></a></p>
                    </div>
                </div>

            </form>

        </>
    )
}
export default Register