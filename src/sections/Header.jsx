import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header className='h-fit md:h-[10vh] flex justify-center items-center text-2xl text-white'>
        <div className='w-1/3 pl-8 font-semibold text-4xl invisible md:visible text-[#A5C1FF]'>
          Melos
        </div>
        <div className='w-1/3 flex justify-center text-xl md:text-2xl'>
          Now Playing
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