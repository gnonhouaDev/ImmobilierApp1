import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets' 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div className='bg-gray-800 min-h-screen w-full overflow-hidden flex items-center bg-cover bg-no-repeat object-cover'
    style={{backgroundImage:"url('/src/assets/header_img.png')"}}
    id='Accueil'
    >
      <Navbar/>
      <div className="text-white px-6 md:px-16 lg:px-20 flex flex-col gap-10  items-start">
        <h1 className='text-5xl pt-10 leading-tight  md:text-6xl font-bold '>Possédez Le Domaine De Vos Rêves</h1>
        <p className='md:w-3/4 text-base text-gray-200 md:leading-8 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore saepe quas? Repudiandae illo quidem consequuntur distinctio architecto corrupti, nemo eos quibusdam neque tempore officia incidunt, quisquam enim reprehenderit cumque.Soluta dolore saepe quas? Repudiandae illo quidem consequuntur distinctio architecto corrupti,?</p>
        <div className="flex gap-5">

        <div className="text-white flex space-x-6">
    
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
            <FaFacebook className="text-white text-4xl hover:text-green-300 " />
          </a>

          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-4xl hover:text-green-300" />
          </a>

          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-4xl hover:text-green-300 " />
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-4xl hover:text-green-300" />
          </a>
        </div>

        </div>
        <button className='bg-green-300 py-3 px-8 rounded text-gray-800 font-semibold'>Learn more</button>
      </div>
    </div>
  )
}

export default Header
