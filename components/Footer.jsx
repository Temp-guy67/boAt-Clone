import React from 'react';
import { AiFillTwitterSquare , AiFillInstagram , AiFillFacebook , AiFillWechat } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 boAt Clone Lifestyle All Right reserved</p>
      <p className='icons'>
        <AiFillTwitterSquare/>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillWechat/>

      </p>
    </div>

  )
}

export default Footer