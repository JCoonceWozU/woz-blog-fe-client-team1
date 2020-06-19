import React, { useContext, useState } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import UserContext from '../components/UserContext';


const Login = () => {
    const { toggleLoginButton, signIn } = useContext(UserContext);
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const authenticate = event => {
        event.preventDefault();
        console.log("here");
        if (valEmail(email) && valPassword(password)) {
            //allow user to login
            signIn(email);
            console.log("you're logged in")
            toggleLoginButton();
        } else {
            setMessage("Please Enter Valid Email and Password");
            setTimeout(function(){ setMessage(""); }, 3000);
        }        
    }
    const valEmail = (email) => {   
        //search string for @ and .com
            if (email.search("@") !== -1 && email.search(".com") !== -1) {
                return true;
            } 
            return false;
        //email must have @, .com
        //return a boolean        
    }
    const valPassword = (password) => {
        if (password.length >= 6) return true;
        return false;
    }
    
   
    //password length of 6 characters
    //check if email or password fields are not empty
    //if not empty remove message
    //or else add message

    return (
        <Container>
            <h1>Login:</h1>
            <br />
            <Form>        
            <Form.Group controlId="formBasicEmail">                   
                <Form.Label>Email Address</Form.Label>                    
                <Form.Control type="email" placeholder="Enter Email" value={email} onChange={event => setEmail(event.target.value)}/>                    
                <Form.Text className="text-muted"> 
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)} />
                <br />
                {message && <div className= "message">{message}</div>}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={event => authenticate(event)} >
                Log In
            </Button>
            </Form>
              
            <style jsx>{`
            .message {
                color: red;
                font-size: 16px;
                max-width: 300px;
                text-align: center;
            }`}</style>
        </Container>
    )
}

export default Login;
