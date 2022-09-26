import React from 'react'

const H1 = ({ text }) => {
  return (
    <div className='my-5'>
            <h1 className='text-2xl sm:text-3xl text-gray-900 text-justify tracking-wide font-bold'>{text}</h1>
      </div>
  )
}

export default H1