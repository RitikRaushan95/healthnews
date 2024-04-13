import React from 'react'

function Mynewscard({newsCollection,newsCollection1,newsCollection2,newsCollection3}) {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={newsCollection.urlToImage} alt="API fetch error"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{newsCollection.title}</h2>
          <p class="leading-relaxed text-base">{newsCollection.description}</p>
          <a rel='noreferrer' className='text-blue-500 hover:text-blue-700 underline' href={newsCollection.url} target='_blank'>Know More</a>

        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={newsCollection1.urlToImage} alt="API fetch error"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{newsCollection1.title}</h2>
          <p class="leading-relaxed text-base">{newsCollection1.description}</p>
          <a rel='noreferrer' className='text-blue-500 hover:text-blue-700 underline' href={newsCollection1.url} target='_blank'>Know More</a>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={newsCollection2.urlToImage} alt="API fetch error"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{newsCollection2.title}</h2>
          <p class="leading-relaxed text-base">{newsCollection2.description}</p>
          <a rel='noreferrer' className='text-blue-500 hover:text-blue-700 underline' href={newsCollection2.url} target='_blank'>Know More</a>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={newsCollection3.urlToImage} alt="API fetch error"/>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{newsCollection3.title}</h2>
          <p class="leading-relaxed text-base">{newsCollection3.description}</p>
          <a rel='noreferrer' className='text-blue-500 hover:text-blue-700 underline' href={newsCollection3.url} target='_blank'>Know More</a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Mynewscard
