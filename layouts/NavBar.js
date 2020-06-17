import React from 'react'
import { Navbar, Nav, Dropdown, Figure, Form } from 'react-bootstrap';
import Link from 'next/link'

       
const NavBar = ({ isLoggedIn }) => {
  console.log("navbar is logged in", isLoggedIn);
    return ( 
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand 
             onClick={console.log("What are you doing? Looking for secrets? Don't put your nose where it doesn't belong. Or you might learn something you DON'T like... Hee hee hee.")}
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
            <Nav.Link style={{ padding: "10px 20px" }}  href="/login">{isLoggedIn ? "Log Out": "Log In"}</Nav.Link>
            </Form>
            </Navbar>
    )
}

export default NavBar
