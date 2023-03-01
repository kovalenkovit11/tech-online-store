import React, { useContext } from "react";
import "./style.scss";
import CardInCart from "../../components/CardInCart/CardInCart";
import CartSummary from "../../components/CartSummary/CartSummary";
import { CardContext } from "../../../src/App.js";
import { Link } from "react-router-dom";

const Cart = () => {
  const { card, setCard } = useContext(CardContext);
  const priceTotal = card.reduce((prev, curr) => (prev + curr.count * curr.newSales ) , 0);

  const deleteProduct = (id) => {
    setCard((card) => card.filter((product) => id !== product.id)); //
  };
const deleteAllProduct = () => { setCard((card) => card.filter((product) => !product ))}
  const increase = (id) => {
    setCard((card) => {
      return card.map((product) => {
        if (product.id === id) {
          const newCount = product.count + 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.newSales,
          };
        }
        return product;
      });
    });
  };
  const decrease = (id) => {
    setCard((card) => {
      return card.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1;
          return {
            ...product,
            count: newCount > 1 ? newCount : 1,
            priceTotal: (newCount > 1 ? newCount : 1) * product.newSales,
          };
        }
        return product;
      });
    });
  };
  const changeValue = (id, value) => {
    setCard((card) => {
      return card.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.newSales,
          };
        }
        return product;
      });
    });
  };
  const products = card.map((product) => {
    return (
      <CardInCart
        deleteProduct={deleteProduct}
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

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
             <Link to={"/"}> 
             <button className="cart-btn__btn ">
                Continue Shopping
              </button>
                </Link>
              <button onClick={deleteAllProduct} className="cart-btn__btn disabled">Clear Shopping Cart</button>
            </div>

            <div>
              <button className="cart-btn__btn">Update Shopping Cart</button>
            </div>
          </div>
        </div>
      </div>
      <CartSummary priceTotal={priceTotal}/>
    </div>
  );
};

export default Cart;
