import React from 'react'

function Mynewscard({newsCollection}) {
  console.log(newsCollection.urlToImage)
  return (
    <div className="xl:w-1/4 md:w-1/3 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={newsCollection.urlToImage} alt="API fetch error" />
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4 overflow-hidden line-clamp-2" >{newsCollection.title}</h2>
        <p className="leading-relaxed text-base overflow-hidden line-clamp-4">{newsCollection.description}</p>
        <a rel='noreferrer' className='text-blue-500 hover:text-blue-700 underline' href={newsCollection.url} target='_blank'>Know More</a>
    </div>
</div>
  )
}

export default Mynewscard
