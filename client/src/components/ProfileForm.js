import React, { useState } from 'react';
import axios from 'axios';
import { 
    Card, 
    CardContent,
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import { navigate } from '@reach/router';
const styles = {
    paper: {
        width: "800px", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

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

        navigate('/login')
    }

    return (
        <Card>
            <CardContent>
                <Paper elevation={3} style={styles.paper}>
                    <form onSubmit={onSubmitHandler}>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>First Name</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Last Name</InputLabel>
                            <OutlinedInput type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput type="email" onChange = {(e)=>setEmail(e.target.value)}/>
                        </FormControl>
                        <FormControl variant="outlined" style={styles.input}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput type="password" onChange = {(e)=>setPassword(e.target.value)}/>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary">
                            Register
                        </Button>
                    </form>
                </Paper>
            </CardContent>
        </Card>
        
    )

}