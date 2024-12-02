import React, { useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [clickMenu,setClickMenu] = useState(false)
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className='flex items-center justify-between py-4 px-6 md:px-16 lg:px-20 bg-transparent m-auto text-white'>
        
        {/* ---------------menu----------- */}

        <div className="flex gap-16 items-center ">
          <h2 className='text-3xl font-semibold '>Immob<span className='text-green-300'>Shap</span></h2>
          <ul className='hidden md:flex gap-10'>
            <a href="#Accueil" className='text-lg hover:text-green-300 font-normal hover:underline hover:underline-offset-8 '>Accueil</a>
            <a href="#Apropos" className='text-lg hover:text-green-300 font-normal hover:underline hover:underline-offset-8'>Apropos</a>
            <a href="#Maison" className='text-lg hover:text-green-300 font-normal hover:underline hover:underline-offset-8'>Maison</a>
            <a href="#Contact" className='text-lg hover:text-green-300 font-normal hover:underline hover:underline-offset-8'>Contact</a>
          </ul>
        </div>

        <button className='hidden md:block text-lg bg-green-300 px-6 py-2 rounded-full text-black font-normal'>Connexion</button>
        <img onClick={()=>setClickMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-8 cursor-pointer' />
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${clickMenu ? 'fixed w-full':'h-0 w-0'} top-0 right-0 bottom-0 bg-gray-200 transition-all overflow-hidden`}>
        
        <div className="md:hidden  cursor-pointer  flex  justify-end mr-8 mt-5">
        <img onClick={()=>setClickMenu(false)} src={assets.cross_icon} alt="" className='w-5' />
        </div>

        <ul className='flex flex-col  items-center mt-5 py-5 font-medium'>
            <a onClick={()=>setClickMenu(false)} href="#Accueil" className='text-lg hover:text-sky-600 py-4 '>Accueil</a>
            <a onClick={()=>setClickMenu(false)} href="#Apropos" className='text-lg hover:text-sky-600  py-4'>Apropos</a>
            <a onClick={()=>setClickMenu(false)} href="#Maison" className='text-lg hover:text-sky-600  py-4'>Maison</a>
            <a onClick={()=>setClickMenu(false)} href="#Contact" className='text-lg hover:text-sky-600  py-4'>Contact</a>
        </ul>

      </div>

    </div>
  )
}

export default Navbar
