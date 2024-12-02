import React from 'react'
import { assets } from '../assets/assets'
import Titre from './Titre'

const About = () => {
  return (
    <div className='px-6 md:px-16 lg:px-20 w-full mb-20 ' id="Apropos">
      <div className="  md:flex gap-12 md:max-h-[65vh]">

            <img src={assets.prope_1} alt="" className="rounded-lg w-full" />

        <div className="flex flex-col justify-center">
            <span className='text-slate-400 mt-3' >About Us</span>
            <h2 className='font-bold text-wrap text-3xl md:w-3/4'>Who we are and what you get from  our spaces</h2>
            <p className='my-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse amet,
                 nobis commodi, recusandae ipsum ratione dignissimos cupiditate magni
                  numquam odio omnis nihil libero aspernatur deserunt veritatis 
            </p>
            <div className='mb-10'>
                <button className='px-8 py-3 bg-black text-white rounded'>Read more</button>
            </div>

            <div className="grid grid-cols-3">
                <div className="">
                    <h3 className='font-bold text-xl'>SK+Sell</h3>
                    <p>Properties</p>
                </div>

                <div className="">
                    <h3 className='font-bold text-xl'>9.5/10</h3>
                    <p>Satisfaction</p>
                </div>

                <div className="">
                    <h3 className='font-bold text-xl'>15 Years</h3>
                    <p>Experience</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
