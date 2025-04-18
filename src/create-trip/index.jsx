import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '../components/ui/input';
import { useState } from 'react';


function CreateTrip() {
  const [place, setPlace] =useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Customize your adventure</h2>
        <p className='mt-t text-gray-500 text-xl'>Answer a few quick questions and we'll create a personalized itinerary just for you!</p>
      <div>
        <div className='mt-20 flex flex-col gap-10'>
          <h2 className='text-xl my-3 font-medium'>Where would you like to go?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) =>{setPlace(v); ChartNoAxesColumnDecreasing.log(v)}
            }}
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you traveling?</h2>
          <Input placeholder={'Ex. 3'} type="number"/>
        </div>
      </div>
    </div>
  )
}

export default CreateTrip