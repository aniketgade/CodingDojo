import React, { useState } from  'react';

const UserForm = (props) => {

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        if(e.target.value.length < 2){
            setFirstNameError("First Name should be at least 2 characters");
        }
        else{
            setFirstNameError("");
        }
        props.setFirstName(e.target.value);
    };

    const handleLastName = (e) => {
        if(e.target.value.length < 2){
            setLastNameError("Last Name should be at least 2 characters");
        }
        else{
            setLastNameError("");
        }
        props.setLastName(e.target.value);
    };

    const handleEmail = (e) => {
        if(e.target.value.length < 5){
            setEmailError("Email should be at least 5 characters");
        }
        else{
            setEmailError("");
        }
        props.setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        if(e.target.value.length < 8){
            setPasswordError("Password should be at least 8 characters");
        }
        else{
            setPasswordError("");
        }
        props.setPassword(e.target.value);
    };

    const passwordsMustMatch = (e) => {
        if(e.target.value !== props.password){
            setConfirmPasswordError("Passwords must match");
        }
        else{
            setConfirmPasswordError("");
        }
        props.setConfirmPassword(e.target.value)
    };
    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError?
                    <p style={{color:'red'}}>{firstNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError?
                    <p style={{color:'red'}}>{lastNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError?
                    <p style={{color:'red'}}>{emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError?
                    <p style={{color:'red'}}>{passwordError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ passwordsMustMatch } />
                {
                    confirmPasswordError?
                    <p style={{color:'red'}}>{confirmPasswordError}</p>:
                    ''
                }
            </div>
        </form>
    );
}

export default UserForm;