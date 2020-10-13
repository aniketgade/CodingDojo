import React from  'react';

const UserForm = (props) => {
    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => props.setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => props.setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => props.setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => props.setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => props.setConfirmPassword(e.target.value) } />
            </div>
        </form>
    );
}

export default UserForm;