import React from 'react'

import payPal from "../../components/Navigation/payPal.svg";
import zip from "../../components/Main/img/primary1.svg";


const CartSummary = ({priceTotal, count}) => {
  const priceFormatter= new Intl.NumberFormat('de-DE')
  return (
    <div className="cart-right">
    <div className="cart-right__background">
    <div className="cart-container">
    <div className="cart-right__header">
        <h1>Summary</h1>
        <p>Estimate Shipping and Tax</p>
        <p className="cart-right__header--desc">Enter your destination to get a shipping estimate.</p>
        <p>Apply Discount Code</p>
      </div>
      <div className="cart-right_body">
        <div className="cart cart-right__subtotal">
          <p>Count</p>
          <p> {count}</p>
        </div>
        <div className="cart cart-right__shipping">
          <p>Subtotal</p>
          <p>$ {priceFormatter.format(priceTotal)},00</p>
        </div>
        <p className="shipping_description">
          (Standard Rate - Price may vary depending on the item/destination.
          TECS Staff will contact you.)
        </p>
        <div className="cart cart-right__tax">
          <p>Tax</p>
          <p>$ 0.00</p>
        </div>
        <div className="cart cart-right__gst">
          <p>GST (0%)</p>
          <p>$ 0</p>
        </div>
        <div className="cart cart-right__total">
          <p>Order Total</p>
          <p>$ {priceFormatter.format(priceTotal)},00</p>
        </div>
      </div>
      <div className="cart-right__btn">
        <button className="cart__btn btn-proceed">
          Proceed to Checkout
        </button>
        <button className="cart__btn btn-pay">
          Check out with <img src={payPal} alt="payPal" />
        </button>
        <button className="cart__btn btn-check disabled">
          Check Out with Multiple Addresses
        </button>
      </div>
      <div className="cart-right__banner">
        <img width={'66px'} height={'21px'} style={{borderRight: "2px solid #00AEB8"}} src={zip} alt="zip" />
        <p><span>own</span> it now, up to 6 months interest free <a href="#!">learn more</a></p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default CartSummary