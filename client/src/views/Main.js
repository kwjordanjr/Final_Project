import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import Landing from '../components/Landing';
import ProfileForm from '../components/ProfileForm';
import HomeBar from '../components/HomeBar';
import Login from '../components/Login';
import Feed from '../components/Feed';
export default () => {



    return (
        <div>
            <HomeBar />
            <Router>
                <Landing path='/'/>
                <Feed path='feed/' />
                <Login path='login/' />
                <ProfileForm path='register/'/>

            </Router>
            
        </div>
    )

}