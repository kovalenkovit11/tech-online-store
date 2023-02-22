import React from 'react'

const CloseCardBtn = ({deleteProduct, id}) => {
  return (
    <div >
    <svg onClick={()=>{deleteProduct(id)}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9.25" fill="white" stroke="#CACDD8" strokeWidth="1.5"/>
    <path d="M7 7L13.5 13.5" stroke="#A2A6B0" strokeLinecap="round"/>
    <path d="M13.5 7L7 13.5" stroke="#A2A6B0" strokeLinecap="round"/>
    </svg>
    </div>
  )
}

export default CloseCardBtn