import React from 'react'
import { Form, Container } from 'react-bootstrap';


const SignUp = () => {
    return (
        <Container> 
            <h1>Sign Up!</h1>
            <br/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="email" placeholder="Enter First Name" />
                    <Form.Text className="text-muted"><br></br>
                        We'll never share your Name with anyone else.<br></br>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="email" placeholder="Enter Last Name" />
                    <Form.Text className="text-muted"><br></br><br></br>
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted"><br></br>
                        We'll never share your email with anyone else.<br></br>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Passwored" />
                    <Form.Text className="text-muted"><br></br><br></br>
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Bio:</Form.Label>
                    <Form.Control placeholder="Tell us about you!" as="textarea" rows="3" />
                </Form.Group>
                <button variant="primary" type="submit">Submit</button>
            </Form>
        </Container>
    )
}

export default SignUp

