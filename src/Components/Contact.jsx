import React from 'react'
import Titre from './Titre'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-6 md:px-16 lg:px-20 w-full mb-20' id="Contact">
      <Titre titre="Let's stay connected"/>

        <div className="md:flex justify-around md:mt-20">
            <div className="flex flex-col items-center">
                <img src={assets.insta} alt="" className='w-10 mb-4 cursor-pointer' />
                <p>Email Adresse</p>
                <span className='text-gray-400 mb-4 mt-2 '>monemail@gmail.com</span>
            </div>

            <div className="flex flex-col items-center">
                <img src={assets.insta} alt="" className='w-10 mb-4 cursor-pointer' />
                <p>Phone number</p>
                <span className='text-gray-400 mb-4 mt-2'>+225 0103436438</span>
            </div>

            <div className="flex flex-col items-center">
                <img src={assets.insta} alt="" className='w-10 mb-4 cursor-pointer' />
                <p>Adresse</p>
                <span className='text-gray-400 mb-4 mt-2'>Belle ville,Côte d'ivoire</span>
            </div>
        </div>

    </div>
  )
}

export default Contact
