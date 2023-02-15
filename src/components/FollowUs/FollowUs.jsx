import React from 'react'
import './style.scss'
import firstImg from './img/1.png'
import secondImg from './img/2.png'
import threeImg from './img/3.png'
import fourImg from './img/4.png'
import fiveImg from './img/6.png'
import sixImg from './img/7.png'
import sevenImg from './img/8.png'
import eihgtImg from './img/9.png'
import nineImg from './img/0.png'
const FollowUs = () => {
  return (
    <div className='content-wrapper__follow'> 
        <h2 className='title'>Follow us on Instagram for News, Offers & More</h2>
        <div className='card-container'>

        <div className='card'>
            <img src={firstImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={secondImg} alt='note'/>
            <p className='description'>As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task....</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={threeImg} alt='note'/>
            <p className='description'>if you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={fourImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={fiveImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={sixImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={sevenImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={eihgtImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        <div className='card'>
            <img src={nineImg} alt='note'/>
            <p className='description'>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
            <p className='description-date'>01.09.2020</p>
        </div>
        
        </div>
    </div>
  )
}

export default FollowUs