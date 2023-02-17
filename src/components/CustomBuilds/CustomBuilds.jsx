import React from 'react'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard.jsx'
import { castomBuilds } from '../../helpers/customBuilds'
import './style.scss'
const CustomBuilds = () => {
  return (
    <div className='content-wrapper'>
        <CastomCard/>
        {castomBuilds.map((card, index) => {
            return (
              <Card 
              inStock={card.inStock}
              desc={card.desc} 
              img={card.img} 
              oldSales={card.oldSales}
              newSales={card.newSales}
                // index={index}
              />
            );
          })}

    </div>
  )
}

export default CustomBuilds