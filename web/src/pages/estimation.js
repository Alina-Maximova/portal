import React, { Component, useState} from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { addEx } from '../api'
import Maps from '../components/map'

const Home =()=> {
    const [value,setValue] = useState("")
    const [city,setCity] = useState("")
    const [dictrict,setDictrict] = useState("")
    const [descption,setDescption] = useState("")
    const handleClick = async() => {
        await addEx(value, city, dictrict,descption)
    } 

    const handleOnChange = (event) =>{
        setValue(event.target.value)
    }
    const handleOnChange1 = (event) =>{
        setCity(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setDictrict(event.target.value)
    }
    const handleOnChange3 = (event) =>{
        setDescption(event.target.value)
    }

        return (
            <>
    
             <Container style={{float: 'left ', width:'30%'}}>
                  <Maps/>  
                </Container>
                <Container style={{float: 'right', width:'40%'}}>
                    <h1>Поставить оценку</h1>
                
                        <Form.Group controlId="formBasicCity">
                        <Form.Label>Город:</Form.Label>
                        <Form.Control as="select" size="sm" custom  value={city} onChange={(event)=>handleOnChange1(event)}>
                        <option value="0"></option>
                            <option value="Владимир">Владимир</option>
                        
                        </Form.Control>
                           

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Район:</Form.Label>
                        <Form.Control as="select" size="sm" custom value={dictrict} onChange={(event)=>handleOnChange2(event)}>
                        <option value="0"></option>
                        <option value="Ленинский район">Ленинский район г. Владимир</option>
                        <option value="Октябрьский район">Октябрьский район г. Владимир</option>
                        <option value="Октябрьский район">Фрунзенский район г. Владимир</option>
                        
                        </Form.Control>
                            

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Оценка:</Form.Label>
                        <Form.Control as="select" size="sm" value={value}  custom  onChange={(event)=>handleOnChange(event)}>
                        <option value="0"></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                   
                        </Form.Control>
                            



                        </Form.Group>
                        <Form.Group controlId="formBasicDis">
                            <Form.Label>Описание района:</Form.Label>
                            <Form.Control as="textarea" rows="3" value={descption} onChange={(event)=>handleOnChange3(event)} />
                            {/* <Form.Text>Опи</Form.Text> */}
                        </Form.Group>
                       
                        <Button variant="danger" type="submit" onClick={handleClick}>Поставить</Button>

                 
                </Container>
     
               
            </>
        )
    }

export default  Home