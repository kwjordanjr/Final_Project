import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import { 
    Card, 
    CardContent,
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "15vw", padding: '50px'
    },
    input: {
        marginBottom: "1rem", width:'100%'
    },
    button: {
        width: "100%"
    },
    card: {
        margin: '3vw', 'padding-top': '25px', width: '80vw', padding:  '50px', display: 'inline-block'
    }
}

export default () => {
    const [account, setAccount] = useState('williamjessup');
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(account);
        this.forceUpdate();
        
    }
    useEffect(()=>{

    },[account])


    return (
        <Card  style={styles.card}> 
            <CardContent>
                <Paper elevation={3} style={styles.paper}>
                    <form onSubmit={onSubmitHandler}>
                        <FormControl variant="filled" style={styles.input}>
                            <InputLabel >@</InputLabel>
                            <OutlinedInput type="text" onChange={(e) => setAccount(e.target.value)}/>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" style={styles.button}>
                            Go!
                        </Button>
                    </form>
                </Paper>

            </CardContent>
            <TwitterTimelineEmbed style={{display:'inline'}}
                 sourceType='profile'
                 screenName={ account }
                 options={{
                     height:'50%',
                     width:'50%'
                 }}
                 theme='dark'
                />
        </Card>
        
    )

}
