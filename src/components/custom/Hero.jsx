import React from 'react'
import { PiBatteryPlusVerticalDuotone } from 'react-icons/pi'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='w-full flex flex-col items-center gap-9 px-4'>
      <h1 
      className='font-extrabold text-[50px] text-center mt-16'
      >
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI: </span>Personalized Travel Itineraries in Seconds!</h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner is able to create custom itineraries tailored to your interests and budget! </p>
    <Button> Get Started </Button>
    <br></br>
    </div>
  )
}

export default Hero