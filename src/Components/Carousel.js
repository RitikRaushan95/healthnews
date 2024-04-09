import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
function Carousel({newsCollection}) {
  return (
    <div>
<div className="card mb-3">
  <img src={newsCollection.urlToImage} className="card-img-top" alt="..." style={{height:"500px"}}/>
  <div className="card-body">
    <h5 className="card-title">{newsCollection.title}</h5>
    <p className="card-text">{newsCollection.description}</p>
    <a href={newsCollection.url} class="btn btn-primary">Know More</a>
  </div>
</div>

    </div>




  )
}

export default Carousel
