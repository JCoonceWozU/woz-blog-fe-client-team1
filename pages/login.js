import React,{ useState } from 'react'
import Layout from '../layouts/Layout';
import Login from '../components/Login';
import Navbar from '../layouts/NavBar';

const login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log("login")
    return (               
        <Layout isLoggedIn={isLoggedIn}>        
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />                  
        </Layout> 
            
    )
}

export default login;