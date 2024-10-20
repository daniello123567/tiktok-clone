import React from 'react'
import Search from './videoComponents/icons/Search'
import Home from './videoComponents/icons/Home'
import New from './videoComponents/icons/New'
import Me from './videoComponents/icons/Me'
import Message from './videoComponents/icons/Message'
function NavBar() {
  return (
    <div className='w-full md:w-[4em] md:h-screen md:flex-col md:py-[2em] text-[0.625em] h-[5.166875em] flex justify-between items-center pr-[3em] pl-[3em] text-white fixed bottom-0 z-[3000]  bg-black'>
    <div className='flex w-[1.75em] tracking-[0.15px] flex-col justify-center items-center'>
     <Home/>
     <p>Home</p>
    </div>
    <div className='flex w-[1.75em] tracking-[0.15px] flex-col justify-center items-center'>
     <Search/>
     <p>Discover</p>
    </div>
    <div className='flex w-[1.75em] tracking-[0.15px] flex-col justify-center items-center'>
     <New/>
    </div>
    <div className='flex w-[1.75em] tracking-[0.15px] flex-col justify-center items-center'>
   <Message/>
     <p>Inbox</p>
    </div>
    <div className='flex w-[1.75em] tracking-[0.15px] flex-col justify-center items-center'>
     <Me/>
     <p>Me</p>
    </div>
 </div>
  )
}

export default NavBar
