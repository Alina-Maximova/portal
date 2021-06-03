import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

export default class Footer extends Component {
    render(){
        return(
             <Container fluid style={{ color:'white'}}>
                <Container style={{ justifyContent:'center'}}>
                    <p style={{ textAlign:'center'}}>(C) Корпорация Майкрософт (Microsoft Corporation). Все права защищены.</p>
                </Container>
            </Container>
        )
    }
}