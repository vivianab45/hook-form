import React from 'react'

const Display = (props) => {

    const {firstName, lastName, email, password, confirmPassword}= props

    return (
        <div>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>

        </div>


    );
    
      
    };






export default Display