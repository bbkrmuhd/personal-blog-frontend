import React from 'react'

const Pagination = () => {
  return (
    <div>
<nav aria-label="Page Navigation">
  <ul className="inline-flex space-x-1">
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3 ml-0 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</a>
    </li>
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3  leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="py-1 px-2 sm:py-2 sm:px-3  text-cyan-700 bg-blue-50 rounded-full border border-gray-300 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3  leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3 leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="py-1 px-2 sm:py-2 sm:px-3  leading-tight text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Pagination