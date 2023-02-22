
import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
const CastomCard = ({text, subTitle , style}) => {
  return (
    // <div>
                <div className='castom-card' style={style} >
            <div className='custom-builds'>
            <p>{text}</p>
            <p>{subTitle}</p>
            </div>
            <Link className='castom-builds__link' to={'/'}>See All Products</Link>
        </div>    
    // </div>
  )
}


export default CastomCard