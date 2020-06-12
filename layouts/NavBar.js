import React from 'react'
import { Dropdown, Figure } from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav>
            <h1>Median</h1>
            <ul>
                <li>Home</li>
            </ul>
            <button>Sign Up</button>
            <button>Sign In</button>
            <p>Profile Image</p>
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
        </nav>
    )
}

export default NavBar
