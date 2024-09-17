import React from 'react'

function Headings() {
  return (
    <div className='w-full flex justify-between items-center px-6 pt-10'>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>#</p>
        </div>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>Platform</p>
        </div>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>Last Traded Price</p>
        </div>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>Buy/Sell Price</p>
        </div>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>Difference</p>
        </div>
        <div>
            <p className='text-gray-600 text-sm font-semibold font-serif'>Savings</p>
        </div>
    </div>
  )
}

export default Headings