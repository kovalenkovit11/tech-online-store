import React from 'react'
import './style.scss'
import Card from '../Card/Card'
import logoZip from '../Main/img/primary1.svg'
import { cards } from '../../helpers/cards'
const NewProducts = () => {
  return (
    <div>
    <div className='main-content'>
    
    {cards.map((card) => { 
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
    <div className="brake-line">
        <img src={logoZip} alt='logo'/>
        <p className='brake-line__text'><span>own</span> it now, up to 6 months interest free <a className='brake-line__link' href='/#'>learn more</a></p>
    </div>
  </div></div>
  )
}

export default NewProducts