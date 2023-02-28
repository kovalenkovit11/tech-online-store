import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="comments-wrapper">
      <div className="comments-container">
      <Slider {...settings}>
      <div>
          <div className="comments-text">
            <h2 className="utils">‘’</h2>
            <p className="utils-comment">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="utils-autor">- Tama Brown</p>
        </div>
        <div>
          <div className="comments-text">
            <h2 className="utils">‘’</h2>
            <p className="utils-comment">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="utils-autor">- Tama Brown</p>
        </div>
        <div>
          <div className="comments-text">
            <h2 className="utils">‘’</h2>
            <p className="utils-comment">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="utils-autor">- Tama Brown</p>
        </div>
        <div>
          <div className="comments-text">
            <h2 className="utils">‘’</h2>
            <p className="utils-comment">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <p className="utils-autor">- Tama Brown</p>
        </div>

        
      </Slider>
      
        

        <div className="utils-footer">
          <button type="button" className="utils-btn">
            Leave Us A Review
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Comments;
