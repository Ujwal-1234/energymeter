import React from 'react'

export default function Home() {
  return (
    <div>
        <div className=' w-1/2 h-1/2 text-white p-4 rounded-lg bg-slate-900'>
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
