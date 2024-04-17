import React, { useEffect, useState } from 'react'
import Mynewscard from './Components/Mynewscard';

function Main() {
    const [news,newsSet]=useState([]);

    const newsStore=news.map((ele,index)=>{
      return <Mynewscard key={index} newsCollection={ele}/>
    })

    const apiFunction= async()=>{
            const url= await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9de620adab044ea852839ab79673f0b");
            const jsonData= await url.json();
            const finalData=jsonData.articles;
            newsSet(finalData);
    }

    useEffect(() => {
      apiFunction();
    }, []);
  
      return (
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
         {newsStore}
        </div>
      )
}

export default Main
