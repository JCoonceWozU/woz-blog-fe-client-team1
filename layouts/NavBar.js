import React from 'react'
import {Navbar, Nav,} from 'react-bootstrap'
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
          </Nav>
        </Navbar>
    )
}

export default NavBar
