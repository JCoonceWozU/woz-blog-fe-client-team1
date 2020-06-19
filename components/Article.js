import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const Article = ({ article }) => {
    return (
        <Card>
            <Card.Header>
            <Link href='/articles/[id]' as={'/articles/' + article.slug}>
              <a>{article.title}</a>
            </Link>
                {' '}
                <cite title="Source Title">Source: Author</cite>{' '}
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                    {article.description}{' '}
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


