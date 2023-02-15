import React from "react";
import Navigation from "../Navigation/Navigation";
import "./index.scss";

const Header = () => {
  return (
    <div className="border-bot">
    <header className="header">
      <div className="header-content">
        <p>
          <span className="center-content">Mon-Thu:</span> 9:00 AM - 5:30 PM{" "}
        </p>
        <p className="center-content">
          Visit our showroom in 1234 Street Adress City Address, 1234
          <a href="/#" className="contact-link">
            Contact Us
          </a>
        </p>
        <div className="right-content">
          <p>Call Us: (00) 1234 5678</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9996 7.39652C8.56601 7.39652 7.39609 8.56644 7.39609 10C7.39609 11.4336 8.56601 12.6035 9.9996 12.6035C11.4332 12.6035 12.6031 11.4336 12.6031 10C12.6031 8.56644 11.4332 7.39652 9.9996 7.39652ZM17.8082 10C17.8082 8.92191 17.818 7.85355 17.7574 6.77737C17.6969 5.52737 17.4117 4.418 16.4977 3.50394C15.5816 2.58792 14.4742 2.30472 13.2242 2.24417C12.1461 2.18363 11.0777 2.19339 10.0016 2.19339C8.92343 2.19339 7.85507 2.18363 6.7789 2.24417C5.5289 2.30472 4.41953 2.58988 3.50546 3.50394C2.58945 4.41995 2.30624 5.52737 2.2457 6.77737C2.18515 7.8555 2.19492 8.92386 2.19492 10C2.19492 11.0762 2.18515 12.1465 2.2457 13.2227C2.30624 14.4727 2.5914 15.5821 3.50546 16.4961C4.42148 17.4121 5.5289 17.6953 6.7789 17.7559C7.85703 17.8164 8.92539 17.8067 10.0016 17.8067C11.0797 17.8067 12.148 17.8164 13.2242 17.7559C14.4742 17.6953 15.5836 17.4102 16.4977 16.4961C17.4137 15.5801 17.6969 14.4727 17.7574 13.2227C17.8199 12.1465 17.8082 11.0782 17.8082 10V10ZM9.9996 14.0059C7.78281 14.0059 5.99375 12.2168 5.99375 10C5.99375 7.78323 7.78281 5.99417 9.9996 5.99417C12.2164 5.99417 14.0055 7.78323 14.0055 10C14.0055 12.2168 12.2164 14.0059 9.9996 14.0059ZM14.1695 6.76566C13.6519 6.76566 13.234 6.34769 13.234 5.83011C13.234 5.31253 13.6519 4.89456 14.1695 4.89456C14.6871 4.89456 15.1051 5.31253 15.1051 5.83011C15.1052 5.95301 15.0811 6.07473 15.0342 6.18831C14.9872 6.30188 14.9183 6.40508 14.8314 6.49198C14.7445 6.57889 14.6413 6.64779 14.5277 6.69476C14.4142 6.74172 14.2924 6.76581 14.1695 6.76566V6.76566Z"
              fill="white"
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1051 0.276611H0.894231C0.552475 0.276611 0.276367 0.552719 0.276367 0.894475V15.1053C0.276367 15.4471 0.552475 15.7232 0.894231 15.7232H15.1051C15.4468 15.7232 15.723 15.4471 15.723 15.1053V0.894475C15.723 0.552719 15.4468 0.276611 15.1051 0.276611ZM13.321 4.78508H12.0872C11.1199 4.78508 10.9326 5.24462 10.9326 5.92041V7.40907H13.2418L12.9406 9.73957H10.9326V15.7232H8.52484V9.74151H6.51099V7.40907H8.52484V5.69064C8.52484 3.6961 9.74319 2.60905 11.5234 2.60905C12.3768 2.60905 13.1086 2.67276 13.3229 2.70173V4.78508H13.321Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
        </header>
      <Navigation/>
    </div>
  );
};

export default Header;
