import React from 'react'
import Articles from "../../components/Articles";
import Layout from '../../layouts/Layout';
import { Container } from 'react-bootstrap';

const index = () => {
    return (
        <Layout>
        <Container>
           < Articles />
        </Container>
        </Layout>
    )
}

export default index
