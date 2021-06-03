import React, { Component, useState } from 'react'

import Maps from '../components/map'
import { Button, Form, Container } from 'react-bootstrap'
    import {getDataGoogleNap} from '../api'


const Mark=()=> {
    const [address,setAddress] = useState("")
    const [email,setEmail] = useState("")
    const [classification,setClassification] = useState("")
    const [description,setDescription] = useState("")
    
    const handleClick = async() => {
        await getDataGoogleNap(address, email, classification,description)
    } 

    const handleOnChange = (event) =>{
        setAddress(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setEmail(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setClassification(event.target.value)
    }
    const handleOnChange3 = (event) =>{
        setDescription(event.target.value)
    }

        return (
            <>
            <Container style={{float: 'left ', width:'30%'}}>
                  <Maps/>  
            </Container>
            <Container style={{float: 'right', width:'40%'}}>
                    <h1>Поставить метку</h1>
                    <Form>
                        <Form.Group controlId="formBasicAddress">
                        <Form.Label>Адрес проблемы:</Form.Label>
                            <Form.Control type="text"  value={address} onChange={(event)=>handleOnChange(event)}/>
                           

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Emall:</Form.Label>
                            <Form.Control type="email"  value={email} onChange={(event)=>handleOnChange1(event)}/>
                            <Form.Text>Email для связи с вами</Form.Text>
                           

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Вид проблемы:</Form.Label>
                        <Form.Control as="select" size="sm" custom value={classification} onChange={(event)=>handleOnChange2(event)}>
                        <option value="0"></option>
                        <option value="ЖКХ">ЖКХ</option>
                        <option value="Дорожные">Дорожные</option>
                        <option value="Социальные">Социальные</option>
                        <option value="Природные">Природные</option>
                        </Form.Control>
                                                

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Описание проблемы:</Form.Label>
                            <Form.Control as="textarea" rows="3"   value={description} onChange={(event)=>handleOnChange3(event)}/>
                            <Form.Text>Описание проблемы</Form.Text>
                        </Form.Group>
                       
                        <Button variant="danger" type="submit" onClick={handleClick}>Поставить</Button>

                    </Form>
                </Container>
                
                
                
                
            </>
        )
   
}
export default Mark