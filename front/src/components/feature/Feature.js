import React from 'react'
import "./feature.css"
import Carousel from 'nuka-carousel';



const Feature = () => {

  const params = {
    wrapAround: true,
    animation: 'zoom',
    slidesToShow: 2,
  }
  return (
<div>
<Carousel {...params}>

          <img src="https://images.pexels.com/photos/219095/pexels-photo-219095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"/>

      </Carousel>
</div>
  )
}

export default Feature