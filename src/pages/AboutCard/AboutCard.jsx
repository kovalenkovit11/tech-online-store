import React, {useContext} from 'react'
import './style.scss'

import { CardContext } from '../../App';
const AboutCard = () => {
    const { card, setCard } = useContext(CardContext);

    const priceTotal = card.reduce((prev, curr) => (prev + curr.count * curr.newSales ) , 0);
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

  return (
    <div className='container'>
        <header className='x'>
        <div>
            <ul className='list-items'>
                <li className='list-item active'>About Product</li>
                <li className='list-item'>Details</li>
                <li className='list-item'>Specs</li>
            </ul>
        </div>
        <div className='header-page_right'>
            <p>On Sale from {priceTotal}</p>
            <input
          className="count__input"
          type="number"
          onChange={(e) => {
            changeValue(card.id, +e.target.value);
          }}
          min={1}
          max={100}
          value={card.count}
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
              increase(card.id);
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
              decrease(card.id);
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

        </header>
    </div>
  )
}

export default AboutCard