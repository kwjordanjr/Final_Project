import React, { useState } from 'react';
import axios from 'axios';
export default () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/profile', {
            firstName,
            lastName,
            email,
            password
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type='text' onChange = {(e)=>setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label>
                <input type='text' onChange = {(e)=>setLastName(e.target.value)} />
            </p>
            <p>
                <label>Email</label>
                <input type='text' onChange = {(e)=>setEmail(e.target.value)} />
            </p>
            <p>
                <label>Password</label>
                <input type='text' onChange = {(e)=>setPassword(e.target.value)} />
            </p>
            <input type='submit'/>
        </form>
    )

}