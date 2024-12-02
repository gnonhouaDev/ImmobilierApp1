import React from 'react'
import { marque } from '../assets/assets'
const Marque = () => {
  return (
    <div className='bg-gray-100 w-full mb-20 '>
      <div className="px-6 md:px-16 lg:px-20 md:flex py-10 justify-between items-center">
        <div className="">
          <h2 className='text-3xl font-semibold mb-6'>Our Partenerships</h2>
          <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          { marque.map((items,index)=>(

              <div className="bg-white py-8 px-10 rounded" key={index}>
                <p className='text-lg w-32'>{items.logo}</p>
              </div>
            ))
          }
            {/* <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg w-32'>loremLogo</p>
            </div>

            <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg'>loremLogo</p>
            </div>

            <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg'>loremLogo</p>
            </div>

            <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg'>loremLogo</p>
            </div>

            <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg'>loremLogo</p>
            </div>

            <div className="bg-white py-8 px-20 rounded">
              <p className='text-lg'>loremLogo</p>
            </div> */}
        </div>

      </div>
    </div>
  )
}

export default Marque
