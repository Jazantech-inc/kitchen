import React from 'react'
import loader from '/Images/spinner-light-bg.gif'
const Spinner = () => {
  return (
    <div>
   <img src={loader} alt="spinner" className='w-16'/>   
    </div>
  )
}

export default Spinner
