import React from 'react'
import './style.scss'
import Card from '../Card/Card'
import logoZip from '../Main/img/primary1.svg'
const NewProducts = () => {
  return (
    <div>
    <div className='main-content'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <div className="brake-line">
        <img src={logoZip} alt='logo'/>
        <p className='brake-line__text'><span>own</span> it now, up to 6 months interest free <a className='brake-line__link' href='/#'>learn more</a></p>
    </div>
  </div></div>
  )
}

export default NewProducts