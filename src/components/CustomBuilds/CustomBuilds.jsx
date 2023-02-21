import React from 'react'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard.jsx'
import image from "./img/image30.jpg"
import { castomBuilds } from '../../helpers/customBuilds'
import './style.scss'
const CustomBuilds = () => {
  return (
    <div className='content-wrapper'>
        <CastomCard text={"Castom"} subTitle={'Builds'} style={{
          backgroundImage:`url(${image})`
          
          }} />
        {castomBuilds.map((card, index) => {
            return (
              <Card 
              inStock={card.inStock}
              desc={card.desc} 
              img={card.img} 
              oldSales={card.oldSales}
              newSales={card.newSales}
              key={index}
              />
            );
          })}

    </div>
  )
}

export default CustomBuilds