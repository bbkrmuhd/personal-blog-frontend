import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Pagination = ({ setPageNumber, data }) => {

  
  return (
<div>
    <nav aria-label="Page Navigation">
      <ul className="inline-flex justify-between w-full">
        <li>
        <button onClick={() => setPageNumber(page => page - 1)} className="py-1 px-2 sm:py-2 sm:px-3 ml-0 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={!data.prev_url}>Prev</button>
        </li>
      
        
        <li>
         <button  onClick={() => setPageNumber(page => page + 1)} className="py-1 px-2 sm:py-2 sm:px-3  leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={!data.next_url}>Next</button>
        </li>
      </ul>
    </nav>

   </div>
  )
}

export default Pagination