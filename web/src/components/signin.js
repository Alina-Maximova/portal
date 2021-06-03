import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import {signin} from "../api"



const Signin = () =>  {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleClick = async() => {
       const data =  await signin(email,password)
    //      console.log(data.data.status)
    //     if (data.data.status === 200){
            if (data.data.values.role === "Admin"){
                document.location.href="/admin"
            } else{
                document.location.href="/"}
    //     } else if (data.data.status === 401){
    //         alert(data.data.values.message)

    //     }
    } 

    const handleOnChange = (event) =>{
        setEmail(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setPassword(event.target.value)
    }

        return (
            <div>
            
                <Container style={{float: 'right', width:'40%'}}>
                    <h1>Авторизоваться</h1>
                    {/* <Form> */}
                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>handleOnChange(event)}/>
                            <Form.Text></Form.Text>

                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password"  placeholder="Enter password" value={password} onChange={(event)=>handleOnChange1(event)} />
                            

                        </Form.Group>
                        <Button variant="danger" type="submit" onClick={handleClick}>Войти</Button>

                    {/* </Form> */}
                </Container>
               
            </div>
        )
}

export default Signin