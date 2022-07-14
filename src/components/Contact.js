import React from 'react'
import img1 from '../images/bg_1.jpg';
import './Contact.css';

export default function Contact() {
  return (
    <>
    <div className="top" style={{ backgroundImage:`url(${img1})` }}>

<h1 className="logoo">Malobisa Hotel</h1>
<h3 className="abouth">Contact Us</h3>
    </div>

    <div className="cusform" >
      <h3 className="conh3">Contact Information</h3>
      <div className='addre'>Address: </div>
      <div className='addre1'>Phone: </div>
      <div className='addre2'>Email: </div>
      <div className='addre3'>Website:</div>
      <div className='emailform'>


      </div>
    </div>
    
   
    
      <div className="footerd"></div>
    </>
  )
}
