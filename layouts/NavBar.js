import React, {useContext} from 'react';
import { Navbar, Nav, Dropdown, Figure, Form } from 'react-bootstrap';
import Link from 'next/link';
import UserContext from '../components/UserContext';
       
const NavBar = () => {
  const { isLoggedIn, signOut, toggleLoginButton, user } = useContext(UserContext);
  console.log("NavBar -> user", user)
  console.log("navbar", isLoggedIn);
  
  const handleSignOut= (event) => {
    signOut();
    toggleLoginButton();
  } 
  
    return ( 
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand             
             style={{fontFamily: "Comic Sans MS", fontSize: "50px"}}  
             ><Link href="/">Median</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link style={{ padding: "10px 20px" }}  href="/">Home</Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }}  href="/articles">Articles</Nav.Link>        
            </Nav>
            <br/>
            <Form inline >
            <Nav.Link style={{ padding: "10px 20px" }}  href="/signup">Sign Up</Nav.Link>
            {user ?  <Nav.Link style={{ padding: "10px 20px" }} onClick={handleSignOut}>Log Out</Nav.Link>:
            <Nav.Link style={{ padding: "10px 20px" }}  href="/login">Log In</Nav.Link>}
            
            </Form>
            </Navbar>
    )
}

export default NavBar
