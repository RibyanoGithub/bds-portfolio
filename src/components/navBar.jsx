import React, { useState } from 'react'

export const Navbar = () => {
  const [open , setOpen ] = useState(false)
  return (
    <div className='flex items-center justify-between p-5 bg-blue-600'>
        <div>
          <h1 className='text-white text-xl md:text-2xl'>MSTR BDS</h1>
        </div>
        <div className='hidden sm:flex sm:gap-10 text-white '>
          <h3>Hum</h3>
          <h3>Abawt</h3>
          <h3>Kuntak</h3>
          <h3>Tolong</h3>
        </div>
        <div className='md:hidden text-3xl text-white' onClick={()=>setOpen(!open)}>🍔</div>
        {
           open && (
            <div className='md:hidden absolute bg-blue-600 right-0 top-18 w-40 text-white text-3xl flex flex-col h-60 gap-6 pl-4'>
              <h3>Hum</h3>
              <h3>Abawt</h3>
              <h3>Kuntak</h3>
              <h3>Tolong</h3>
            </div>
           )
        }
    </div>
  )
}