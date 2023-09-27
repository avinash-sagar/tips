
import React from 'react'

function Header() {
  return (
    <div className='row valign-middle' >
        <div className='d-flex md-6 lg-6 xl-6 valign-middle' >
            <div className='d-flex valign-middle' >
                <img width={150} src='/images/airline-logo.jpg' />
                <h4 className='ms-1 fw-bold' >Trip Guide </h4>
            </div>
        </div>
        <div className='d-flex md-6 lg-6 xl-6' > 
        </div>
    </div>
  )
}

export default Header
