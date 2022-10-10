import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Pagination = ({ page }) => {
  const [pageNum , setPageNum] = useState(1)
  console.log(page)

  const prevPage = () => {
    setPageNum(pageNum - 1)
  }
  const nextPage = () => {
    setPageNum(pageNum + 1)

  }
  console.log(pageNum)

  // useEffect(() => {
  //   setPageNum(pageNum)
  // }, [number])
  
  
  return (
<div>
<nav aria-label="Page Navigation">
  <ul className="inline-flex justify-between w-full">
    <li>
      <a onClick={() => prevPage()} href={`?page=${pageNum}`} className="py-1 px-2 sm:py-2 sm:px-3 ml-0 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</a>
    </li>
   
    
    <li>
      <a onClick={() => nextPage()} href={`?page=${pageNum}`} className="py-1 px-2 sm:py-2 sm:px-3  leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination