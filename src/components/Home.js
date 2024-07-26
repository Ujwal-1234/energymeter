import React from 'react'

export default function Home() {
  return (
    <div>
        <div className=' bg-slate-600 text-white text-2xl p-2 rounded-lg mb-2 flex justify-between'>
            <span className='w-1/4 '>Ujwal Kumar Mahato</span>
            <span className='w-1/4 text-center text-blue-300'>Meter Number : 4562</span>
            <span className='w-1/4 text-center text-red-300'>Sanction Load : 452 KW</span>
            <span className=' w-1/4 text-right font-bold text-green-200'>Nashik</span>
        </div>
        <div className=' lg:w-1/2 h-1/2 text-white p-4 rounded-lg bg-slate-900'>
            <h2 className=' bg-white bg-opacity-10 p-2 rounded-lg text-2xl'>Parameters</h2>
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Voltage</span>
                <span className=' w-1/2 p-2 text-2xl'>220.4 V</span>
            </p>
            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Current</span>
                <span className=' w-1/2 p-2 text-2xl'>00 A</span>
            </p>

            
            <p className=' flex justify-between'>
                <span className=' w-1/2 p-2 text-2xl'>Unit</span>
                <span className=' w-1/2 p-2 text-2xl'>2204 KW</span>
            </p>

        </div>
      
    </div>
  )
}
