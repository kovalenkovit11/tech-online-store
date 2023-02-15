import React from 'react'
import './style.scss'
import imageFirst from './img/image1.png'
import imageSecond from './img/image2.png'
import imageThree from './img/image3.png'
import imageFour from './img/image4.png'
import imageFive from './img/image5.png'
import imageSix from './img/image6.png'
import imageSeven from './img/image7.png'
const Brands = () => {
  return (
    <div className='conteiner-wrapper'>
       <img src={imageFirst} alt='brand'/>
       <img src={imageSecond} alt='brand'/>
       <img src={imageThree} alt='brand'/>
       <img src={imageFour} alt='brand'/>
       <img src={imageFive} alt='brand'/>
       <img src={imageSix} alt='brand'/>
       <img src={imageSeven} alt='brand'/>
    </div>
  )
}

export default Brands