import React from 'react'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard.jsx'
import image from "./img/image30.jpg"
import { castomBuilds } from '../../helpers/customBuilds'
import './style.scss'
const CustomBuilds = () => {
  const shownCards = (castomBuilds.slice(0,5));

  return (
    <div className='content-wrapper'>
        <CastomCard text={"Castom"} subTitle={'Builds'} style={{
          backgroundImage:`url(${image})`
          
          }} />
        {shownCards.map((card) => {
            return (
              <Card 
              inStock={card.inStock}
              desc={card.desc} 
              img={card.img} 
              oldSales={card.oldSales}
              newSales={card.newSales}
              key={card.id}
              id={card.id}
                count={card.count}
              />
            );
          })}

    </div>
  )
}

export default CustomBuilds