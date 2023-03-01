import React from 'react'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
import NavigateProduct from '../NavigateProduct/NavigateProduct'
import { laptops } from '../../helpers/laptops'
import IMAGE from './image30.png'


const Laptops = () => {
  const shownCards = (laptops.slice(0,5));
  return (
    <div>
    <NavigateProduct/>
    <div className='content-wrapper'>
   
    <CastomCard text={"MSI"} subTitle={'Laptops'} style={{backgroundImage:`url(${IMAGE})`}}/>

    {shownCards.map((card) => {
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

    </div>
  )
}

export default Laptops