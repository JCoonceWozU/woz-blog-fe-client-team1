import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Median</title>
            </Head>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
