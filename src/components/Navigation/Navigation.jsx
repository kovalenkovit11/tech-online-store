  import React, {useState} from "react";
  import { Link} from "react-router-dom";
  import CartDetailNav from "../CartDetailNav/CartDetailNav";
  import "./style.scss";

  
  
  const Navigation = () => {
  
    const [searchIcon, setSearchIcon] = useState('34px') //34px 130px
    const [search, setSearch] = useState ('none');
    const showSearchBar = () =>{
      setSearch ('flex');
      setSearchIcon('130px')
    }
    const hideSearchBar = () =>{
      setSearch ('none');
      setSearchIcon('34px')
     
      
    }
    
 
    return (
      <div>
      <nav className="navbar">
      <Link to={'/'}><svg
            width="34"
            height="41"
            viewBox="0 0 34 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z"
              fill="#0156FF"
            />
          </svg></Link>

        <div>
          <ul className="nav-links">
            <Link to={"/laptops"}><li className="nav-item">Laptops</li></Link>
            <Link to={"/desktop"}><li className="nav-item">Desktop PCs</li></Link>
            <Link to={"/network"}><li className="nav-item">Networking Devices</li></Link>
            <Link to={"/printers"}><li className="nav-item">Printers & Scanners</li></Link>
            <Link to={"/pc"}><li className="nav-item">PC Parts</li></Link>
            <Link to={"/allOthers"}><li className="nav-item">All Other Products</li></Link>
            <Link to={"/repairs"}><li className="nav-item">Repairs</li></Link>
            <Link to={"/details"}><button className="nav-btn">Our Details</button></Link>
          </ul>
        </div>
        <div className="nav-right">
         <div className="search-input"> 
        <input style={{display: search}} className="form-control" type="text" name="search" placeholder="Search..." />
        <svg onClick={hideSearchBar} style={{display: search, position: 'absolute',top:'4px',  right: '34px', cursor: 'pointer'}}  width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.8457 3.84613L15.1535 15.1539" stroke="#0156FF" strokeWidth="2.4" strokeLinecap="round"/>
<path d="M15.1543 3.84613L3.84653 15.1539" stroke="#0156FF" strokeWidth="2.4" strokeLinecap="round"/>
</svg>
         <button className="submit" >  <svg
          
          onClick={showSearchBar}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top:'6px',
            right: searchIcon

            }}
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7061 16.0085L16.7061 16.0085C16.789 16.0914 16.8873 16.1571 16.9955 16.2019C17.1038 16.2468 17.2198 16.2698 17.3369 16.2698C17.4541 16.2698 17.5701 16.2468 17.6783 16.2019C17.7866 16.1571 17.8849 16.0914 17.9678 16.0085C18.0506 15.9257 18.1163 15.8274 18.1611 15.7191C18.206 15.6109 18.229 15.4949 18.229 15.3777C18.229 15.2606 18.206 15.1446 18.1611 15.0363C18.1163 14.9281 18.0506 14.8298 17.9678 14.7469L17.9677 14.7469L14.636 11.416C15.6013 10.135 16.0539 8.53846 15.903 6.93943C15.7493 5.31054 14.9808 3.80139 13.7539 2.719C12.5269 1.63662 10.9337 1.06232 9.29838 1.11292C7.66303 1.16352 6.10838 1.83523 4.95072 2.99141C3.79204 4.14838 3.11812 5.70363 3.06631 7.34023C3.0145 8.97682 3.58868 10.5716 4.67185 11.7995C5.75503 13.0275 7.26567 13.7962 8.89594 13.9491C10.4965 14.0991 12.0941 13.6444 13.3749 12.6766L16.7061 16.0085ZM12.7887 4.25366C13.2263 4.68416 13.5743 5.19703 13.8127 5.76269C14.051 6.32835 14.175 6.93561 14.1775 7.54944C14.18 8.16327 14.061 8.77152 13.8272 9.3391C13.5935 9.90669 13.2497 10.4224 12.8156 10.8564C12.3816 11.2905 11.8659 11.6343 11.2983 11.868C10.7307 12.1018 10.1225 12.2208 9.50865 12.2183C8.89482 12.2158 8.28756 12.0918 7.7219 11.8535C7.15623 11.6151 6.64336 11.2671 6.21287 10.8295C5.35255 9.9551 4.87263 8.77613 4.87762 7.54944C4.88262 6.32275 5.37213 5.14773 6.23954 4.28033C7.10694 3.41292 8.28196 2.92341 9.50865 2.91841C10.7353 2.91342 11.9143 3.39335 12.7887 4.25366Z"
              fill="black"
              stroke="black"
              strokeWidth="0.2"
            />
          </svg></button> 
       
        </div>
            <CartDetailNav  />
        </div>
        </nav>
      </div>
    );
  };

  export default Navigation;
