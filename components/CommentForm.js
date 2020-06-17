import React, {useState} from 'react';
import {useRouter} from 'next/router';
import CommentList from './CommentList';
import {Form, Button, Container} from 'react-bootstrap';

const CommentForm = () => {  
    const [body, setBody] = useState("");
    console.log("CommentForm -> body", body)
    const router = useRouter()
    console.log("articleId",router.query.articleId)
    const handleSubmit=(e) => {
      e.preventDefault();
      //save name and body after post
    const data = {
        userId:1,
        articleId: router.query.articleId,
        body,
    }
    console.log("handleSubmit -> data", data)
      //post comment with articleId using fetch
      // reset state to empty for name and body      
    }
     return (
        <div className="commentForm panel panel-default">
          <div className="panel-body">
            <form className="form" onSubmit={handleSubmit}>
                <p>Name:Donta</p>
              <input
                className="form-control"
                type="text"
                value={body}
                onChange={(event)=> setBody(event.target.value)}
                placeholder="Say something here..."
               />
              <br />
              <button className="btn btn-default" type="submit">post</button>
            </form>
          </div>
        </div>
      );
    }
export default CommentForm;