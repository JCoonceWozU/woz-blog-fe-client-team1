import React from 'react';

const Comment=({author,body}) => {    
    return (
    <div className="comment panel panel-default">
        <div className="panel-heading">
        <h4>{author}</h4>
        </div>
        <div className="panel-body">{body}</div>
    </div>
    );
}
export default Comment;