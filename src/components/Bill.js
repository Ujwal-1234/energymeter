import React from 'react'

export default function Bill() {
  return (
    <div>
      <div className=' lg:h-screen overflow-auto'>
        <div className='bg-slate-100 m-2 overflow-auto rounded-lg h-screen'>
          <p className=' bg-red-400 p-2 sticky top-0'>
            <span className=' text-5xl font-bold block'>MAHAVITRAN</span>
            <span className=' text-sm'>Maharashtra State Electricity Distribution Co. Ltd</span>
          </p>

          <div className='flex justify-between w-full overflow-auto'>
            <table width={"100%"}>
              <thead>
                <tr>
                  <th className='p-2 text-center '>Sr. No.</th>
                  <th className='p-2 text-center '>Consumer Name</th>
                  <th className='p-2 text-center '>Consumer Number</th>
                  <th className='p-2 text-center'>Bill Date</th>
                  <th className='p-2 text-center'>Bill Number</th>
                  <th className='p-2 text-center'>Status</th>
                  <th className='p-2 text-center'>Energy Consumption (kWh)</th>
                  <th className='p-2 text-center '>Reading Date</th>
                  <th className='p-2 text-center '>Previous Units</th>
                  <th className='p-2 text-center '>Amount (INR)</th>
                  <th className='p-2 text-center '>Payment Status</th>
                  <th className='p-2 text-center '>Outstanding</th>
                  <th className='p-2 text-center '>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-green-500 text-white font-semibold rounded-lg'>Completed</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-green-500 text-white font-semibold rounded-lg'>Completed</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-green-500 text-white font-semibold rounded-lg'>Completed</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  
                <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
                  <tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr><tr>
                  <td className='p-2 text-center'>1</td>
                  <td className='p-2 text-center'>ABCd</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>123456789</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>4536</td>
                  <td className='p-2 text-center'>00/00/0000</td>
                  <td className='p-2 text-center'>2436</td>
                  <td className='p-2 text-center'>520.02</td>
                  <td className='p-2 text-center'><span className=' p-1 bg-red-500 text-white font-semibold rounded-lg'>Pending</span></td>
                  <td className='p-2 text-center'>45.80</td>
                  <td className='p-2 text-center'>05:52:10</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
