
import React from "react";
import cartImg1 from "./image51.png";
import svgDelete from "../../components/Navigation/delete.svg";
import svgEdit from "../../components/Navigation/edit.svg";
import payPal from "../../components/Navigation/payPal.svg";
import zip from "../../components/Main/img/primary1.svg";
import "./style.scss";
const Cart = () => {
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
            <div className="cart-total">
              <div className="cart-image">
                <img src={cartImg1} alt="cart" />
                <p className="cart-description">
                  MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                  32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse
                  3 Years Warranty
                </p>
              </div>
              <div>
                <p className="cart-price">$4,349.00</p>
              </div>

              <div className="cart-qty">
                
                <input className="count__input" type="number" min={1} max={100} value={1} />
              </div>
              <p className="cart-price">$13,047.00</p>
              <div className="cart-svg">
                <img src={svgDelete} alt="svg delete" />
                <img src={svgEdit} alt="svg edit" />
              </div>
            </div>
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
              <p>Subtotal</p>
              <p>$4,349.00</p>
            </div>
            <div className="cart cart-right__shipping">
              <p>Shipping</p>
              <p>$13,047.00</p>
            </div>
            <p className="shipping_description">
              (Standard Rate - Price may vary depending on the item/destination.
              TECS Staff will contact you.)
            </p>
            <div className="cart cart-right__tax">
              <p>Tax</p>
              <p>$0.00</p>
            </div>
            <div className="cart cart-right__gst">
              <p>GST (10%)</p>
              <p>$1.91</p>
            </div>
            <div className="cart cart-right__total">
              <p>Order Total</p>
              <p>$13,047.00</p>
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
            <img width={'66px'} height={'21px'} style={{"border-right": "2px solid #00AEB8"}} src={zip} alt="zip" />
            <p><span>own</span> it now, up to 6 months interest free <a href="#!">learn more</a></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
