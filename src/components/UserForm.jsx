import React, { useState } from  'react';
import Display from './Display'
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState(""); 
    
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName ("");
        setLastName ("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                {
                    firstName>0 && firstName.length< 2? <p style={{color:"red"}}> First Name must be at least 2 characters.</p>:<p></p>
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                {
                    lastName.length>0 && lastName.length< 2? <p style={{color:"red"}}> Last Name must be at least 2 characters.</p>:<p></p>
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length>0 && email.length< 5 ?<p style={{color:"red"}}> Email must be at least 5 characters.</p>:<p></p>
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length>0 && password.length< 8? <p style={{color:"red"}}> Password must be at least 8 characters.</p>:<p></p>
                }
            </div>
            <div>
            <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                {
                    confirmPassword>0 && confirmPassword.length< 8 ? <p style={{color:"red"}}> Confirm Password must be at least 8 characters.</p> : <p></p>
                }
                                {
                    confirmPassword.length>0 && password !==confirmPassword? <p style={{color:"red"}}> Passwords must match.</p>:<p></p>
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <Display firstName={firstName} lastName= {lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    );
};
    
export default UserForm;

