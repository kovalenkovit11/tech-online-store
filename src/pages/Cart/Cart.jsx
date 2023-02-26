
  import React, { useContext, useEffect } from "react";
  import { useState } from "react";
  import "./style.scss";
  import CardInCart from "../../components/CardInCart/CardInCart";
  import CartSummary from "../../components/CartSummary/CartSummary";
  import { CardContext } from "../../../src/App.js";



  const Cart = () => {
    const {card, setCard} = useContext(CardContext)
  const priceTotal= card.reduce((prev, curr)=>{return prev + curr.newSales}, 0)
    console.log(card, 'cart ')
    // const [card, setCard] = useState(cards)
    const [total, setTotal] = useState({
    
      priceTotal: card.reduce((prev, curr)=>{return prev + curr.priceTotal}, 0),
      count: card.reduce((prev, curr)=>{return prev + curr.count}, 0)
    })
    console.log(total, "total");
    useEffect(()=>{
      setTotal({
        priceTotal: card.reduce((prev, curr)=>{return prev + curr.priceTotal}, 0),
        count: card.reduce((prev, curr)=>{return prev + curr.count}, 0)
      })
    },[card])


    const deleteProduct = (id) =>{
    setCard((card)=> card.filter((product)=> id !== product.id))
    }


    const increase =(id)=>{
    setCard((cart) =>{
      return cart.map((product)=>{
        if(product.id === id){
         const newCount = product.count +1
          return{ 
            ...product,
            count: newCount,
            priceTotal: newCount * product.priceTotal
          };
        }
        return product
      })
    })
    }
    const decrease =(id)=>{
      setCard((cart) =>{
      return cart.map((product)=>{
        if(product.id === id){
          const newCount = product.count -1
          return{ 
            ...product,
            count: newCount > 1? product.count -1 : 1,
            priceTotal: (newCount > 1 ? product.count -1 : 1) * product.newSales
          };
        }
        return product
      })
      })
    }
    const changeValue = (id , value) => {
  setCard((cart) =>{
    return cart.map((product)=>{
      if(product.id === id){
        return{ 
        ...product,
          count: value,
          priceTotal: (value) * product.priceTotal,
          
        };
      }
      return product
    })
  })
    }

    const products = card.map((product) =>{
      return <CardInCart deleteProduct={deleteProduct} product={product} key={product.id} increase={increase} decrease={decrease} changeValue= {changeValue}/>
    })

    return (
      <div className="container">
        <div className="cart-left">
          <div className="cart-detail">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
              <ul className="cart-list">
                <li className="cart-item">Item</li>
                <li className="cart-item__price">Price</li>
                <li className="cart-item__qty">Qty</li>
                <li className="cart-item__subtotal">Subtotal</li>
              </ul>
              {products}
            </div>
            <div className="cart-btn">
              <div className="">
                <button className="cart-btn__btn disabled">
                  Continue Shopping
                </button>
                <button className="cart-btn__btn">Clear Shopping Cart</button>
              </div>

              <div>
                <button className="cart-btn__btn">Update Shopping Cart</button>
              </div>
            </div>
          </div>
        </div>
          <CartSummary total={priceTotal}/>
      </div>
    );
  };

  export default Cart;
