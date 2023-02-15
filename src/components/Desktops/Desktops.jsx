import React from 'react'
import Card from '../Card/Card'
import NavigateProduct from '../NavigateProduct/NavigateProduct'
import CastomCard from '../CastomCard/CastomCard'
const Desktops = () => {
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

export default Desktops