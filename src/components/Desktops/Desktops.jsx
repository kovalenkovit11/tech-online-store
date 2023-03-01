import React from 'react'
import Card from '../Card/Card'
import NavigateProduct from '../NavigateProduct/NavigateProduct'
import CastomCard from '../CastomCard/CastomCard'
import { desktops } from '../../helpers/desktops'
import image from './image30.png'
const Desktops = () => {
  const shownCards = (desktops.slice(0,5));

  return (
            <div>
    <NavigateProduct/>
    <div className='content-wrapper'>
    <CastomCard text={"Desktops"} style={{backgroundImage:`url(${image})`}}/>
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

    </div>
  )
}

export default Desktops