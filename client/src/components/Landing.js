import React, { useState } from 'react';
import axios from 'axios';
import {purple} from '@material-ui/core/colors';
import { 
    Card, 
    CardContent,
    Paper,
    Typography
} from '@material-ui/core';

const primary =purple['800'];
const styles = {
    paper: {
        width: "20rem", padding: "100px", margin: '120px', backgroundColor: primary
    },
    card: {
        padding: '80px'
    }
}

export default () => {
    return (
        <Card style={styles.card}>
            <CardContent>
                <Paper style={styles.paper} elevation={10}>
                    <Typography variant="h6" color="textSecondary">
                        Welcome! You must login to use this service...
                    </Typography>
                </Paper>
            </CardContent>
        </Card>
    )
}