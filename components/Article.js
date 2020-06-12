import React from 'react'

const Article = ({article}) => {
    return(<ul>
        <li>Title: {article.title}</li>
        <li>Body: {article.body}</li>
        <li>Date: {article.createdAt}</li>
        <li>Words: {article.wordCount}</li>
        <li>Read Time: {article.readTime}</li>
    </ul>)
}

export default Article
