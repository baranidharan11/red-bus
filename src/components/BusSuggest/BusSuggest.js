import React from 'react'
import "./BusSuggest.css"
export default function BusSuggest() {
  return (
    <div className='bus-suggest'>
      <div className='body-header'>India's No. 1 Online Bus Ticket Booking Site</div>
<div className='display-flex margin-150px'>
    <div className='search-from'>
        <div>From</div>
        <input className='search-input' placeholder='Enter departure'></input>
    </div>
    <div className='search-to'>
      <div>To</div>
      <input className='search-input' placeholder='Enter destination'></input>
    </div>
    <div className='date'>
      <div>
        Select Date
      </div>
      <input type="date" className='search-input'></input>
    </div>
    <div className='search-button'>
      <div>Search</div>
    </div>
    </div>
   </div>
  )
}
