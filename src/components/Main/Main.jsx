import React from 'react'
import CustomBuilds from '../CustomBuilds/CustomBuilds';
import './style.scss'
import NewProducts from '../NewProducts/NewProducts';
import Laptops from '../Laptops/Laptops';
import Desktops from '../Desktops/Desktops';
import Monitors from '../Monitors/Monitors';
import Brands from '../Brands/Brands';
import FollowUs from '../FollowUs/FollowUs';
import Comments from '../Comments/Comments';
const Main = () => {
  return (
    <div className='main-wrapper'>
      <p className="main" alt='img'/>

      <div className='main-header'>
        <h3 className='main-title'>New Products</h3>
        <a href='/#'>See All New Products</a>
      </div>
      <NewProducts/>
      <CustomBuilds/>
      <Laptops/>
      <Desktops/>
      <Monitors/>
      <Brands/>
      <FollowUs/>
      <Comments/>
     
        </div>
  )
}

export default Main