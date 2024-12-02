import React from 'react'
import Titre from './Titre'
import {projectsData} from '../assets/assets'

const Property = () => {
  return (
    <div className='px-6 md:px-16 lg:px-20 w-full mb-20' id="Maison">
      <Titre titre="Featured Properties"/>
      <div className="md:flex gap-6 w-full mt-10 items-center">
            <div className=" mb-10 grid md:grid-cols-3 gap-8 md:w-5/6 md:h-96 h-[65vh] w-full">

                {
                    projectsData.map((item,index)=>(
        
                    <div className="bg-slate-600 rounded-lg relative bg-cover bg-no-repeat object-cover" style={{backgroundImage:`url(${item.image})`}}>
                        <div className="absolute bottom-0 left-0 w-full px-5 pb-9 md:flex flex-col gap-3  text-white">
                            <h3 className='text-2xl font-semibold'>{item.title}</h3>
                            <p className=''>alias totam enim.</p>
                            <p className=''>{item.price}</p>
                        </div>
                    </div>
                    ))

                }

            </div>

            <div className="w-full md:w-2/6 md:flex md:flex-col gap-2 items-start justify-center">
                <h2 className='font-bold text-wrap text-3xl '>Find Property For Your Family</h2>
                <p className='mb-7 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsum consequuntur totam vitae dolorem quasi unde atque sed.Culpa ipsum.</p>
                <button className='py-3 px-8 bg-black text-white rounded hover:bg-slate-500'>Explore All</button>
            </div>
      </div>
    </div>
  )
}

export default Property
