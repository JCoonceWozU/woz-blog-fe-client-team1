import React from 'react'
import { Card } from 'react-bootstrap'

const Article = ({ article }) => {
    return (
        <Card>
            <Card.Header>
                Title: {article.title}
                {' '}
                <cite title="Source Title">Source: Author</cite>{' '}
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                     Body: {article.body}{' '}
                    </p>
                    <footer className="blockquote-footer">
                    {new Date(article.createdAt).toDateString()}
                        <br />
                     Words: {article.wordCount}
                        {' '}
                     Read Time: {article.readTime}{' '}
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>

    )
}

export default Article


