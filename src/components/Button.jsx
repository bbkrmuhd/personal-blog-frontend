import React from 'react'

const Button = ({ text, bgColor = 'cyan', textColor, textSize = 'sm', onClick }) => {
  console.log(onClick)
  return (
    <button onClick={onClick} className={`px-2 sm:px-4 sm:py-1 bg-gray-100 hover:drop-shadow-lg transition-all border border-gray-300 hover:bg-cyan-700  rounded-full text-${textSize} text-${textColor}-800 hover:text-white`}>{text}</button>
  )
}

export default Button