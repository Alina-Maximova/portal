import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import {signup} from "../api"



 const Signup = () =>  {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const handleClick = async() => {
        await signup(email, password, name)
    } 

    const handleOnChange = (event) =>{
        setEmail(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setPassword(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setName(event.target.value)
    }

        return (
            <div>
            
                <Container style={{float: 'left', width:'40%'}}>
                    <h1>Регистрироваться</h1>
                    {/* <Form> */}
                    <Form.Group controlId="formBasicName">
                            <Form.Label>Имя:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event)=>handleOnChange2(event)} />
                            <Form.Text>Должен содержать 5 символов</Form.Text>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event)=>handleOnChange(event)} />
                            <Form.Text></Form.Text>

                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(event)=>handleOnChange1(event)}/>
                            <Form.Text>Должен содержать латинский алфовит и цифры</Form.Text>

                        </Form.Group>
                        <Button variant="danger" type="submit" onClick={handleClick}>Зарегистрироваться</Button>

                    {/* </Form> */}
                </Container>
           
            </div>
        )
}

export default Signup