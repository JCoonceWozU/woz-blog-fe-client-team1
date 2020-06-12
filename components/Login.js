import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <h1>Login:</h1>
            <br />
            <Form>        
            <Form.Group controlId="formBasicEmail">                   
                <Form.Label>Email Address</Form.Label>                    
                <Form.Control type="email" placeholder="Enter Email" />                    
                <Form.Text className="text-muted">      
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default Login;
