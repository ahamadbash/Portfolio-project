import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
        <h1>Contact Us:-</h1>
        <div className='dis'>
      <div className='center'>
      <FaPhone className='whatsapp'/>
      <h3>+91 9550646266</h3>
      </div>
      <div className='center'>
      <FaSquarWhatsapp className='whatsapp'/>
      <h3>+91 9550646266</h3>
      </div>
      <div className='center'>
      <FaLinkedin className='whatsapp'/>
      <h3>Mannur AhamadBasha</h3>
      </div>
      </div>
    </div>
  )
}

export default Contact