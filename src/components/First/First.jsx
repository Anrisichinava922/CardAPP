import React from 'react'
import './first.css'

const First = () => {
  return (
    <header>
        <div className="card-back">
            <div className="card-back-black-line"></div>
            <div className="card-back-gray-line">
                <h1 className='first-h1'>000</h1>
            </div>
        </div>
        <div className="card-front">
            <div className="circles">
                <div className="white-circle"></div>
                <div className="transparent-circle"></div>
            </div>
            <div className="monacemebi">
                <div className="card-num">
                    <h2 className='first-h2'>0000 0000 0000 0000</h2>
                </div>
                <div className="user-info">
                    <div className="name-surname">
                        <h3 className='first-h3'>NAME SURNAME</h3>
                        <h4 className='first-h4'>00/00</h4>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default First