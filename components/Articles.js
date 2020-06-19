import React, {useState, useEffect} from 'react';
import Article from './Article';
import Link from 'next/link';

const Articles = () => {
    //intialize state to array and create setter method(setArticles)
    const [articles, setArticles ] = useState([]);
    
    const fetchArticles = async () => {
        let response = await fetch("http://localhost:8080/api/articles");
        //parse response body to give data
        const data = await response.json();              
        console.log("fetchArticles -> data", data);
        const {articles}= data
        console.log("fetchArticles -> articles", articles)
        setArticles(articles);             
    }

    useEffect(() => {
       fetchArticles();
    }, [])

    const articlesDisplay = articles.map(article => (
      <div> 
        <Link as={`/article/${article.id}`} href="/[article]/[id]">        
          <Article key={article.id} article={article} />               
        </Link>
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
