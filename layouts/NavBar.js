import React from 'react'
import { Navbar, Nav, Dropdown, Figure, Form } from 'react-bootstrap';
import Link from 'next/link'

       
const NavBar = () => {
    return ( 
        <Navbar>
          <Navbar.Brand ><Link href="/">Median</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style={{ padding: "10px 20px" }} ><Link href="/">Home</Link></Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }} ><Link href="/profile">Profile</Link></Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }} ><Link href="/signup">Sign Up</Link></Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }} ><Link href="/login">Login</Link></Nav.Link>
            <Nav.Link style={{ padding: "10px 20px" }} ><Link href="/articles">Blogs</Link></Nav.Link>
            </Nav>
            <br/>
            <Form inline >
            <Dropdown class="btn-group dropleft">
                <Dropdown.Toggle variant="success" id="dropdown-basic">    
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" img src="https://via.placeholder.com/10">My Profile</button> 
                <Figure >
                        <Figure.Image
                            alignRight
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
