import React from 'react';
import magnify from "../assets/magnify.svg";

const Navbar = () => {
  return (
    <div className='w-full h-[100px] m-0 px-[40px] text-center flex items-center 
    justify-between text-[#0d0c22] Roboto'>
      <div className='flex items-center font-medium text-[14px] space-x-8'>
        <span className='tracking-wider cursor-pointer hover:text-gray-400'>Find talent</span>
        <span className='tracking-wider cursor-pointer hover:text-gray-400'>Inspiration</span>
        <span className='tracking-wider cursor-pointer hover:text-gray-400'>Learn design</span>
        <span className='tracking-wider cursor-pointer hover:text-gray-400'>Jobs</span>
        <span className='tracking-wider cursor-pointer hover:text-gray-400'>Go Pro</span>
      </div>

      <h1 className='text-[24px] italic Roboto font-bold -rotate-12'>Dribble</h1>
      
      <div className='font-[16px] flex items-center justify-between Roboto space-x-2'>
        <div className='flex bg-white px-2 hover:outline-gray-400 items-center rounded-full'>
          <img src={magnify} className='w-8 h-4 text-[#6d6d7a]' alt='magnify'/>
        <input type='search' className='bg-white px-2 py-3 rounded-full
        outline-none' placeholder='Search'/>
        </div>
        <div className='flex items-center space-x-3'>
        <button className='px-4 py-3 font-medium rounded-full'>Log in</button>
        <button className='bg-[#0d0c22] font-medium text-white px-4 py-3 rounded-full'>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
