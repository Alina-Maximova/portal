import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap'
import Maps from '../components/map'


export default class Home extends Component {
    render() {
        return (
            <>
            <div>
           
                <Button
                    style={{ margin: '10px 10px 20px 10px' }}
                    variant="danger"
                    href="/mark">Поставить метку</Button>
                <Button
                    style={{ margin: '10px 10px 20px 10px' }}
                    variant="danger"
                    href="/estimation">Поставить оценку</Button>
                <Maps />
               

            </div>
            </>
        );
    }
}