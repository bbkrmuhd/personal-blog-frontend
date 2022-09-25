import React from 'react'
import Button from './Button'

const Featured = ({ post }) => {
  return (
    <div>
        <div className='flex items-center justify-between my-2 sm:my-4'>
            <div>
            <h1 className=' text-2xl sm:text-3xl text-gray-900 tracking-wide'>Article of the Day</h1>
            </div>
       
        <div>
       <Button text='View More'/>
        </div>
        </div>

        <div className='h-96 my-10 rounded-lg bg-cover bg-no-repeat bg-center flex shadow-sm shadow-gray-300 bg-gradient-to-t from-black/75 via-black/0' style={{'backgroundImage': "url('https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800')"}}>
            <div className='flex flex-col gap-4 p-4 basis-1/2'>
            <h1 className=' text-2xl sm:text-3xl text-white tracking-wide leading-6 mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
            <p className='text-gray-300 text-xs sm:text-sm leading-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore doloribus, velit odit possimus corrupti veritatis nostrum, optio libero inventore blanditiis natus maxime laboriosam ex neque nam, minus modi rem. Velit.</p>
           <div>
           <Button text='Read Now' bgColor='' textColor='white' />

           </div>
            
            </div>
            <div>

            </div>

 

        </div>

        

    </div>
  )
}

export default Featured