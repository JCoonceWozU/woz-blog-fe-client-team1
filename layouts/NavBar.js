import React from 'react'
import { Navbar, Nav, Dropdown, Figure, Form } from 'react-bootstrap';
import Link from 'next/link'

       
const NavBar = () => {
    return ( 
        <Navbar>
          <Navbar.Brand 
             onClick={console.log("What are you doing? Looking for secrets? Don't put your nose where it doesn't belong. Or you might learn something you DON'T like... Hee hee hee.")}
             style={{fontFamily: "Comic Sans MS", fontSize: "50px"}}  
             ><Link href="/">Median</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link style={{ padding: "10px 20px" }}  href="/">Home</Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }}  href="/profile">Profile</Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }}  href="/signup">Sign Up</Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }}  href="/login">Login</Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }}  href="/articles">Blogs</Nav.Link>
            </Nav>
            <br/>
            <Form inline >
            <Dropdown class="btn-group dropleft">
                <Dropdown.Toggle  variant="success" id="dropdown-basic">    
                <Figure type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> My Profile

                        <Figure.Image
                            size="lg"
                            width={10}
                            height={10}
                            alt="image"
                            src="https://via.placeholder.com/10"          
                        />                        
                    </Figure>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Post Blog</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Account Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Form>
            </Navbar>
    )
}

export default NavBar
