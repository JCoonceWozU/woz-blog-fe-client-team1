import React from 'react'
import { Navbar, Nav, Dropdown, Figure, Form } from 'react-bootstrap';
import Link from 'next/link'
       
const NavBar = () => {
    return ( 
        <Navbar>
          <Navbar.Brand ><Link href="/">Median</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link href="/">Home</Link></Nav.Link>
            <Nav.Link ><Link href="/profile">Profile</Link></Nav.Link>
            <Nav.Link ><Link href="/signup">Sign Up</Link></Nav.Link>
            <Nav.Link ><Link href="/login">Login</Link></Nav.Link>
            <Nav.Link ><Link href="/articles">Blogs</Link></Nav.Link>
            <Form inline>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Figure>
                        <Figure.Image
                            width={20}
                            height={20}
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
        </Nav>
    </Navbar>

    )
}

export default NavBar
