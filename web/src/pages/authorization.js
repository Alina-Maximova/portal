import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import Signin from '../components/signin'

import Signup from '../components/signup'

import Header from '../components/header';




 const Home = () =>  {
    return(
    <div >
    
        <Signup />
        <Signin />

    </div>
        )
}

export default Home