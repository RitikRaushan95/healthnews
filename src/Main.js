import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from './Components/Carousel'
import axios from 'axios'
function Main() {
const [news,newsSet]=useState([]);
const fetchNews=async ()=>{
    const news=await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9de620adab044ea852839ab79673f0b");
    const randomIndex = Math.floor(Math.random() *10);
    const newsData=news.data.articles[randomIndex];
    console.log(typeof(newsData));
    newsSet(newsData);
    console.log(newsData);
}

useEffect(() => {
    fetchNews();
}, []);


  return (
    <div>
     <Carousel newsCollection={news} />
    </div>
  )
}

export default Main
