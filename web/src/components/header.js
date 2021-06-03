import React, { Component } from 'react'
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap'

import logo from './logo.jpg'





export default class Header extends Component {
    render() {
        return (
            <>
            <Container>
                <Navbar collapseOnSelect  bg="link" variant="danger" >
                    <Container>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                height="90"
                                width="180"
                                className="d-inLine-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav >
                                <Nav.Link style={{ color: 'red' }} href="/">Главная</Nav.Link>
                                {/* <Nav.Link style={{ color: 'red' }} href="/chat">Чат</Nav.Link> */}
                                {/* <Nav.Link style={{ color: 'red' }} href="/rating">Рейтинг районов</Nav.Link> */}
                                <Nav.Link style={{ color: 'red' }} href="/estimation">Оценка</Nav.Link>
                                <Nav.Link style={{ color: 'red' }} href="/mark">Метка</Nav.Link>
                             
                            </Nav>
                            <Form inLine style={{ float: 'left' }}>

                                <Button style={{ margin: '10px 10px 20px 10px', width:'200px'}}
                                    variant="danger"
                                    href="/authorization" >Авторизоваться/Зарегистрироваться</Button>
                            </Form>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
</Container>

              

            </>

        );
    }
}