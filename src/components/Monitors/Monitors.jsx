import React from 'react'
import { monitors } from '../../helpers/monitors'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
import image from './image30.png'
const Monitors = () => {
  return (
    <div className='content-wrapper'>
    <CastomCard text={"Gaming"} subTitle={'Monitors'} style={{backgroundImage:`url(${image})`}}/>
    {monitors.map((card) => {
            return (
              <Card 
              inStock={card.inStock}
              desc={card.desc} 
              img={card.img} 
              oldSales={card.oldSales}
              newSales={card.newSales}
              id={card.id}
                count={card.count}
                key={card.id}
              />
            );
          })}
    </div>
  )
}

export default Monitors