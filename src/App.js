import React from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import Header from './component/Header';

function App() {
  return (
    <div className='container-fluid p-0 w-100' >
      <Header />
      <div className='row'> 
           <img height={700} src='/images/airline_logo.jpg'  />
           <div  className=' col-4 main-title ms-5' >
           <h1>Amazing Flight To <br/> Switzerland</h1>
           <h5 className='mt-3' > Find and book a great experience </h5>
           </div>
      </div>
    </div>
  );
}

export default App;
