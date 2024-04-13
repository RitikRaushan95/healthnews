import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Newscard from './Components/Newscard';
function Main() {
const [news,newsSet]=useState([]);
const [news1,newsSet1]=useState([]);
const [news2,newsSet2]=useState([]);
const [news3,newsSet3]=useState([]);
const [news4,newsSet4]=useState([]);
const fetchNews=async ()=>{
    const news=await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9de620adab044ea852839ab79673f0b");
    const randomIndex = Math.floor(Math.random() *10);
    const randomIndex1 = Math.floor(Math.random() *20);
    const randomIndex2 = Math.floor(Math.random() *25);
    const randomIndex3 = Math.floor(Math.random() *30);
    const randomIndex4 = Math.floor(Math.random() *40);
    console.log(randomIndex);
    console.log(randomIndex1);
    console.log(randomIndex2);
    console.log(randomIndex3);
    console.log(randomIndex4)
    const newsData=news.data.articles[randomIndex];
    const newsData1=news.data.articles[randomIndex1];
    const newsData2=news.data.articles[randomIndex2];
    const newsData3=news.data.articles[randomIndex3];
    const newsData4=news.data.articles[randomIndex4];
    newsSet(newsData);
    newsSet1(newsData1);
    newsSet2(newsData2);
    newsSet3(newsData3);
    newsSet4(newsData4);
}

useEffect(() => {
    fetchNews();
}, []);


  return (
    <div>
     <Newscard newsCollection={news} newsCollection1={news1} newsCollection2={news2} newsCollection3={news3}newsCollection4={news4}/>
    </div>
  )
}

export default Main
