import './style.scss'
import Card from '../Card/Card'
import logoZip from '../Main/img/primary1.svg'
import { cards } from '../../helpers/cards'
import { Link } from 'react-router-dom'
const NewProducts = () => {
  const shownCards = (cards.slice(0,6));

  return (
    <div>
    <div className='main-content'>
    <div className='main-header'>
        <h3 className='main-title'>New Products</h3>
        <Link to='/#'>See All New Products</Link>
      </div>
    
  <div className="cards-container"> 
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
          })}</div>
    <div className="brake-line">
        <img src={logoZip} alt='logo'/>
        <p className='brake-line__text'><span>own</span> it now, up to 6 months interest free <a className='brake-line__link' href='/#'>learn more</a></p>
    </div>
  </div></div>
  )
}

export default NewProducts