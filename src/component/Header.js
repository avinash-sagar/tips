
import React from 'react'

function Header() {
  return (
    <div className='row w-100  d-flex h-100 align-items-center' >
      <div className="col-6 d-flex align-items-center">
        <img width={150} src='/images/airline-logo.jpg' />
        <h4 className='ms-0 fw-bold' >Trip Guide </h4>
      </div>
      <div className="col-6">
        <div className="d-flex h-100 justify-content-between align-items-center">
          <div></div>
          <div></div>
          <div></div>
          <div className='d-flex me-2'><h5 className='me-3 my-auto' >USA</h5><img className='my-auto' height={30} width={32} src='/images/usa.jpeg' /> <img className='my-auto' width={80} src='/images/bell-icon.png' />
            <hr class="vertical-line"></hr>
            <img className='ms-3 my-auto' width={50} src='/images/prof.jpg' />
            <h5 className='ms-3 my-auto' >Delowar</h5>
            <img className='ms-2 my-auto' width={30} src='/images/60995.png' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
