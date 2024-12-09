<Container style={{float: 'left', width:'50%'}}>
                    <h1>Поставить метку</h1>
                    <Form>
                        <Form.Group controlId="formBasicName">
                        <Form.Label>Название:</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicAddress">
                        <Form.Label>Адрес проблемы:</Form.Label>
                            <Form.Control type="text"/>
                           

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Emall:</Form.Label>
                            <Form.Control type="email" />
                            <Form.Text >Email для связи с вами</Form.Text>
                           

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Вид проблемы:</Form.Label>
                        <Form.Control as="select" size="sm" custom >
                        <option value="0"></option>
                        <option value="ЖКХ">ЖКХ</option>
                        <option value="Дорожные">Дорожные</option>
                        <option value="Социальные">Социальные</option>
                        <option value="Природные">Природные</option>
                        </Form.Control>
                                                

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Описание проблемы:</Form.Label>
                            <Form.Control as="textarea" rows="3"   />
                            <Form.Text>Описание проблемы</Form.Text>
                        </Form.Group>
                       
                        <Button variant="danger" type="submit" >Поставить</Button>

                    </Form>
                </Container>