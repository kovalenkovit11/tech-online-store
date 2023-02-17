import React from 'react'
import { monitors } from '../../helpers/monitors'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
const Monitors = () => {
  return (
    <div className='content-wrapper'>
    <CastomCard/>
    {monitors.map((card, index) => {
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

export default Monitors