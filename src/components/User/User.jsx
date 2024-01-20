import React from 'react'
import './user.css'

const User = () => {
  return (
    <form>
        <div className='user-card-details'>
            <div className="cardholder-name">
                <h1 className='user-h1'>Cardholder Name</h1>
                <input className='ch-input' type="text"  placeholder='NAME SURNAME'/>
            </div>
            <div className="card-number">
                <h2 className='user-h2'>Card Number</h2>
                <input className='cn-input' type="text"  placeholder='ENTER YOUR CARD NUMBER'/>
            </div>
            <div className="card-date">
                <h3 className='user-h3'>Exp. Date (MM/YY)   CVC</h3>
                <div className="expiration-date">
                    <input className='month' type="text" placeholder='MM'/>
                    <input className='year' type="text" placeholder='YY'/>
                    <input className='digitalcode' type="text" placeholder='3 DGN'/>
                </div>
                <div className="btn">
                    <button>CONFIRM</button>
                </div>
            </div>
        </div>
    </form>
    
  )
}

export default User