import React, { useEffect, useState } from 'react'
import Mynewscard from './Components/Mynewscard';

function Main() {
    const [news,newsSet]=useState([]);

    let newsStore=news.map((ele,index)=>{
          return <Mynewscard key={index} newsCollection={ele}/>
    })

    const fetchNews = async () => {
          const news = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9de620adab044ea852839ab79673f0b");
          const json= await news.json();
          const newsData = json.articles;
          newsSet(newsData);
      }
    
    useEffect(() => {
        fetchNews();
    }, []);
  
      return (
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
        {newsStore}
    </div>
      )
}

export default Main
