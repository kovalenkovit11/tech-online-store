import React from 'react'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
import NavigateProduct from '../NavigateProduct/NavigateProduct'
import { laptops } from '../../helpers/laptops'
import IMAGE from './image30.png'

const Laptops = () => {
  return (
    <div>
    <NavigateProduct/>
    <div className='content-wrapper'>
    <CastomCard text={"MSI"} subTitle={'Laptops'} style={{
          backgroundImage:`url(${IMAGE})`
          
          }}/>
    {laptops.map((card, index) => {
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

    </div>
  )
}

export default Laptops