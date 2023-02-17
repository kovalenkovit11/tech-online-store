import React from 'react'
import './style.scss'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
import NavigateProduct from '../NavigateProduct/NavigateProduct'
import { laptops } from '../../helpers/laptops'

const Laptops = () => {
  return (
    <div>
    <NavigateProduct/>
    <div className='content-wrapper'>
    <CastomCard/>
    {laptops.map((card, index) => {
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

    </div>
  )
}

export default Laptops