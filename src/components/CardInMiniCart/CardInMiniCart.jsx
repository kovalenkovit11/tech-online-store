import React from 'react'
import CloseCardBtn from '../CloseCardBtn/CloseCardBtn'





const CardInMiniCart = ({ card, deleteProduct}) => {

    const { img, desc, id, count  } = card;
  return (
 <div className="cart-items">
<div className="cart-item">
    <h3 className="cart-item__title">{count} x</h3>
    <img style={{
     maxWidth: '65px', 
     maxHeight: '65px'
     }} 
     src={img} 
     alt={desc} />
    <p className="cart-item__desc">{desc}</p>
    <div className="cart-item__btn">
 <CloseCardBtn id={id} deleteProduct={deleteProduct}/>
 </div>
</div>

  

</div> 
  )
}


export default CardInMiniCart