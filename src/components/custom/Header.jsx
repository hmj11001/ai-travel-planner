import React from 'react'
import { Button } from '../ui/button'


function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5' >
      <img src='/logo.png' width='100' height='100px' />
      <div>
        <Button> Sign In</Button>
      
      </div>
    </div>
  )
}

export default Header