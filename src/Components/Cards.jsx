import React from 'react'
import { cards } from '../assets/assets'

const Cards = () => {
  return (
    <div className='px-6 md:px-16 lg:px-20 overflow-hidden mt-8 mb-20 '>
        <div className="grid md:grid-cols-3 gap-10  w-full ">

            {
                cards.map((item,index)=>(
                    <div className="w-full  rounded bg-cover bg-no-repeat object-cover" style={{backgroundImage:`url(${item.img})`}} key={index} >
                        <div className="py-20 px-10 md:p-14">
                            <p className='font-bold text-2xl'>{item.number}</p>
                            <p className='font-medium'>{item.ms}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    </div>
  )
}

export default Cards
