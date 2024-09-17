import React from 'react'

function Progress() {
  return (
    <div className='w-full flex justify-between items-center px-6 pt-2'>
        <div className=''>
            <p className='text-[#00ffccb6] font-bold text-xl'>0.1%</p>
            <p className='text-gray-600'>5 Mins</p>
        </div>
        <div>
            <p className='text-[#00ffccb6] text-xl font-bold'>0.96%</p>
            <p className='text-gray-600'>1 Hour</p>
        </div>
        <div>
           <p className='text-white text-5xl font-semibold'>₹ 26,56,110</p>
        </div>
        <div>
            <p className='text-[#00ffccb6] text-xl font-bold'>2.73%</p>
            <p className='text-gray-600'>1 Day</p>
        </div>
        <div>
            <p className='text-[#00ffccb6] text-xl font-bold'>7.51%</p>
            <p className='text-gray-600'>7 Days</p>
        </div>
    </div>
  )
}

export default Progress