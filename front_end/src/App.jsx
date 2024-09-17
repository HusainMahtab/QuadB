import { useState } from 'react'
import Header from './Components/Header'
import Progress from './Components/Progress'
import Headings from './Components/Headings'
import ShowPlateformData from './Components/ShowPlateformData'
function App() {
  return (
    <div className='w-full h-[100vh] bg-[#040305]'>
      <Header/>
      <div className='w-full text-center'>
        <p className='text-lg font-semibold font-serif text-gray-600'>Best Price to Trade</p>
      </div>
      <Progress/>
      <div className='text-gray-600 text-center pt-4 font-serif'>
        <p>Average BTC/INR net price including commission</p> 
      </div>
      <Headings/>
      <ShowPlateformData/>
    </div>
  )
}

export default App
