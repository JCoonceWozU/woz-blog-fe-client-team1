import React, {useState, useEffect} from 'react';
import Article from './Article';

const Articles = () => {
    //intialize state to array and create setter method(setArticles)
    const [articles, setArticles ] = useState([]);
    
    const fetchArticles = async () => {
        let response = await fetch("http://localhost:8080/api/articles");
        //parse response body to give data
        const fetchedArticles = await response.json();              
        setArticles(fetchedArticles);             
    }

    useEffect(() => {
       fetchArticles();
    }, [])

    const articlesDisplay = articles.map(article => (
      <div> 
        <Article key={article.id} article={article} />
      <br />
      </div> 
    ))        

    return (        
        <div>
            {articlesDisplay}
        </div>
    )
}

export default Articles
