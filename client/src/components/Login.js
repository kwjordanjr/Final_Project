import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    FormHelperText
} from '@material-ui/core';
const styles = {
    paper: {
    width: "800px", padding: "50px", margin: '40px'
    },
    input: {
    marginBottom: "1rem"
    },
    button: {
    width: "100%"
    }
}

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [profiles, setProfiles] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/profile')
            .then(res=>{
                setProfiles(res.data);
                console.log(res.data)
                setLoaded(true);
            });
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let check = profiles.map((profile, idx)=>{
            if(profile.email === username){
                if(profile.password === password){
                    return navigate('/feed');
                }
            }
        })
        setUsernameError("The username and password did not match our records. Please try again.");
    }


    
 


    return (
        
        <Paper elevation={3} style={styles.paper}>
                    <h2>Login</h2>
                    <form onSubmit={onSubmitHandler}>
                        <FormControl variant="filled" style={styles.input}>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput type="text" onChange={(e) => setUsername(e.target.value)} />
                        </FormControl>
                        <FormControl variant="filled" style={styles.input}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput type="password" onChange={(e) => setPassword(e.target.value)}/>
                            <FormHelperText>{usernameError}</FormHelperText>
                        </FormControl>
                        
                        <br/>
                        <Button type="submit" variant="contained" color="primary">
                            Log In
                        </Button>
                        <br/>
                        <Link to='/register'>Register</Link>
                    </form>

        </Paper>
    )
}