import React from 'react'
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark">        
        <Navbar.Brand href="#home">Median</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Blogs</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />         
        </Form>
      </Navbar>
    )
}

export default Footer



