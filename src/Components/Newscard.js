import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Newscard({newsCollection,newsCollection1,newsCollection2,newsCollection3,newsCollection4}) {
  return (
    <div  class="card mb-3"style={{border: "2px solid grey",width:"805px", borderRadius:'20px',justifyContent:'center',alignContent:"center",marginLeft:"15rem"}}>
      <div id="carouselExampleIndicators" class="carousel slide" style={{width:"800px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={newsCollection.urlToImage} class="d-block w-100" style={{height:"500px", borderRadius:'20px'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={newsCollection1.urlToImage} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={newsCollection2.urlToImage} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{color:'black'}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style={{textEmphasisColor:'black'}}></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className="card-body" style={{margin:'20px'}}>
             <h5 className="card-title">{newsCollection.title}</h5>
             <p className="card-text">{newsCollection.description}</p>
             <a href={newsCollection.url} target='new'>Know More</a>
           </div>
</div>
    </div>
  )
}

export default Newscard
