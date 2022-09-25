import React from 'react'

const Button = ({ text, bgColor = 'cyan', textColor  }) => {
  return (
    <button className={`px-2 sm:px-4 sm:py-1 bg-gray-100 drop-shadow-md transition-all border border-gray-300 hover:bg-cyan-700 rounded-full text-sm text-${textColor}-800 hover:text-white`}>{text}</button>
  )
}

export default Button