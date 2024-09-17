import React, { useEffect, useState } from 'react'
import { FaSortUp } from "react-icons/fa";
import axios from "axios"
function ShowPlateformData() {
   const [data,setData]=useState([])
   const fetchData=async()=>{
      try {
         const response=await axios.get("http://localhost:8000/tickers",)
         console.log("response",response.data)
         setData(response.data)
      } catch (error) {
         console.error("error while fetching the response")
      }
   }
   useEffect(()=>{
      fetchData()
   },[])
  return (
    
   <div className='w-full h-[300px] overflow-y-scroll overflow-x-hidden'>
       {
         data.map((tradingData,index)=>(
         <div>
         <div className="w-full h-full flex justify-center items-center m-1">
            <div className='w-[97%] bg-gray-600 p-2 rounded-lg flex justify-between items-center' key={index+1}>
         <div className="">
            <p className='text-white lext-lg font-bold'>{index+1}</p>
         </div>
         <div className="">
            <img src="https://logowik.com/content/uploads/images/wazirx6358.jpg" alt="wazirx" className='w-10 h-10 rounded-full mix-blend-multiply'/>
         </div>
         <div className="">
            <p className='text-white lext-lg font-bold'>₹{tradingData.last}</p>
         </div>
         <div className="">
            <p className='text-white lext-lg font-bold'>₹{tradingData.buy}/₹{tradingData.sell}</p>
         </div>
         <div className="">
            <p className='text-red-400 lext-lg font-bold'>-3.14%</p>
         </div>
         <div className="flex justify-center items-end">
           <FaSortUp className='text-xl text-[#00ffccb6]'/>
            <p className='text-[#00ffccb6] lext-lg font-bold'>
               ₹22,27,796
            </p>
         </div>
        </div>
            </div>
         </div>
         ))
       }
   </div>
  )
}

export default ShowPlateformData