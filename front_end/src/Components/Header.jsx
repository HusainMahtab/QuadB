import React from 'react'
import { LiaToggleOnSolid } from "react-icons/lia";
import { FaTelegramPlane } from "react-icons/fa";
function Header() {
  return (
    <div className='w-full flex justify-between items-center p-4'>
       <p className="text-[#00ffccb6] text-lg font-bold ml-4 font-serif tracking-widest w-full">HODLINFO</p>
       <div className="flex justify-center items-center gap-4 w-full">
          <select name="" id="" className='bg-gray-800 rounded-md p-1 text-white font-semibold'>
             <option value="INR">INR</option>
          </select>
          <select name="BTC" id="btc" className='bg-gray-800 rounded-md p-1 text-white font-semibold'>
            <option value="BTC">BTC</option>
          </select>
          <button className='font-semibold bg-gray-800 rounded-md p-0.5 px-2 text-white'>BUY BTC</button>
       </div>
       <div className='flex justify-center items-center gap-2 w-full'>
         <div className='border-2 border-[#00ffccb6] rounded-[100%] p-1 px-2'>
            <p className='text-[#00ffccb6]'>57</p>
         </div>
         <div className='h-10 bg-[#00ffccb6] text-white flex justify-between px-2 items-center gap-2 rounded-lg hover:bg-[#00ffcc9f] cursor-pointer'>
            <FaTelegramPlane className='text-lg font-bold'/>
            <p className='text-lg font-bold'>Connect Telegram</p>
         </div>
         <LiaToggleOnSolid className='text-5xl text-[#00ffccb6] cursor-pointer'/>
       </div>
    </div>
  )
}

export default Header