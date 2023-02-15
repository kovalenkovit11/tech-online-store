import React from 'react'
import './style.scss'
import Card from '../Card/Card'
import CastomCard from '../CastomCard/CastomCard'
import NavigateProduct from '../NavigateProduct/NavigateProduct'

const Laptops = () => {
  return (
    <div>
    <NavigateProduct/>
    <div className='content-wrapper'>
    <CastomCard/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>

    </div>
  )
}

export default Laptops