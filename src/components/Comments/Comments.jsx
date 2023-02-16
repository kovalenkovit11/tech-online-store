import React from 'react'
import './style.scss'
const Comments = () => {
  return (
    <div className='comments-wrapper'>
        <div className='comments-container'>

        <div className='comments-text'>
            <h2 className='utils'>‘’</h2>
            <p className='utils-comment'>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
        </div>
            <p className='utils-autor'>- Tama Brown</p>
            <div className='utils-footer'>
                <button type='button' className='utils-btn'>Leave Us A Review</button>
            <div className='utils-dotted'>                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='active'  cx="6" cy="6" r="6" transform="rotate(-180 6 6)" fill="#CACDD8"/>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" transform="rotate(-180 6 6)" fill="#CACDD8"/>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" transform="rotate(-180 6 6)" fill="#CACDD8"/>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="6" transform="rotate(-180 6 6)" fill="#CACDD8"/>
                </svg></div>

            </div>
        </div>
    </div>
  )
}

export default Comments