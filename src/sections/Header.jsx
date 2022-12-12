import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header className='h-fit md:h-[10vh] w-screen flex justify-center items-center text-2xl text-white'>
        <div className='w-1/3 pl-8 font-semibold text-4xl invisible md:visible text-[#A5C1FF]'>
          Melos
        </div>
        <div className='w-1/3 h-fit flex flex-col items-center justify-center gap-1 text-xl md:text-2xl'>
          <p className='md:hidden text-3xl font-semibold text-[#A5C1FF]'>Melos</p>
          <p>Now Playing</p>
        </div>
        <div className='w-1/3 flex justify-end items-center gap-6 pr-8 invisible md:visible'>
          <div>Collections</div>
          <div>Share</div>
          <div className='border-4 border-white w-[60px] h-[60px] rounded-[50%]'></div>
        </div>
    </header>
  )
}

export default Header