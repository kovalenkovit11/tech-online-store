
import React from 'react'
import './style.scss'
const CastomCard = ({text, subTitle , style}) => {
  return (
    // <div>
                <div className='castom-card' style={style} >
            <div className='custom-builds'>
            <p>{text}</p>
            <p>{subTitle}</p>
            </div>
                <a className='castom-builds__link' href='/#'>See All Products</a>
        </div>    
    // </div>
  )
}


export default CastomCard