import React from 'react';
import Comment from './Comment';


const CommentList=() => {
    const comments = [{
        author: "Donta",
        body: "this is comment body"
        
    },{
        author: "Donta",
        body: "this is comment body"
        
    },{
        author: "Donta",
        body: "this is comment body"
        
    }]
  
    let commentNodes = comments.map(function(comment, index) {
    return<Comment key={index} author={comment.author} body={comment.body}/>
    });
        return<div className="commentList">{commentNodes}</div>;
}
export default CommentList;