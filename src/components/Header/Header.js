import React from 'react'
import { BusLogo, HeaderLogo } from '../../assets/logo/logo'
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
      <HeaderLogo />
      <div className="bus-ticket-button">
      <BusLogo/>
      <div >Bus Tickets</div>
      </div>
      
      <div className="header-right">
        <div>help</div>
        <div>account</div>
      </div>
    </div>
    
  )
}

