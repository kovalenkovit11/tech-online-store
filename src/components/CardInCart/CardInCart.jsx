import React from "react";
import CloseCardBtn from "../CloseCardBtn/CloseCardBtn";

const CardInCart = ({
  product,
  deleteProduct,
  increase,
  decrease,
  // priceTotal,
  changeValue,
}) => {
  const { img, desc, newSales, count,  id,  } = product;
  const priceSummary = newSales * count
  
  const priceFormatter= new Intl.NumberFormat()
  return (
    <div className="cart-total">
      <div className="cart-image">
        <img
          style={{ width: "120px", height: "120px", boxSizing: "border-box" }}
          src={img}
          alt={desc}
        />
        <p style={{ maxWidth: "260px" }} className="cart-description">
          {desc}
        </p>
      </div>
      <div>
        <p className="cart-price">{priceFormatter.format(newSales)},00</p>
      </div>

      <div className="cart-qty">
        <input
          className="count__input"
          type="number"
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          min={1}
          max={100}
          value={count}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            gap: "10px",
            marginLeft: "10px",
          }}
          className="cart-arrow"
        >
          <svg
            onClick={() => {
              increase(id);
            }}
            width="12"
            height="10"
            viewBox="0 0 6 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.00006L3 2.00006L5 4.00006"
              stroke="#A2A6B0"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <svg
            onClick={() => {
              decrease(id);
            }}
            width="12"
            height="10"
            viewBox="0 0 6 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1.00006L3 3.00006L1 1.00006"
              stroke="#A2A6B0"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <p className="cart-price">{priceFormatter.format(priceSummary)},00</p>
      <div className="cart-svg">
        <CloseCardBtn deleteProduct={deleteProduct} id={id} />
      </div>
    </div>
  );
};

export default CardInCart;
