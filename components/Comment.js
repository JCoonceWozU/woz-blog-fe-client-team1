import React from 'react';
import { Card } from 'react-bootstrap';


const Comment = ({ author, body }) => {
    return (   
        <Card>        
            <Card.Header>
                {' '}
                <cite title="Source Title">User: Alicia</cite>{' '}
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        {body}{' '}
                    </p>
                    <footer className="blockquote-footer">
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>  
    );
}
export default Comment;