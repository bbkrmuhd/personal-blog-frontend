import React from 'react'

const H1 = ({ text, size }) => {
  return (
    <div className='my-5'>
            <h1 className={`text-2xl sm:text-${size ? size : 4 }xl text-gray-900 dark:text-white capitalize tracking-wide font-bold`}>{text}</h1>
      </div>
  )
}

export default H1