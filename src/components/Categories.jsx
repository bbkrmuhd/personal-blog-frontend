import React from 'react'
import Fetch from '../hooks/Fetch'





const CategoryList = ({ category} ) => {
  return (
    <li>
    <div  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer hover:drop-shadow-md dark:text-white hover:bg-cyan-700 hover:text-white dark:hover:bg-gray-700">
        <span className='text-xl'>🎓</span>  
        <span className="ml-3 font-bold ">{category.name}</span>
    </div>
    </li>
  )
}


const Categories = () => {
  return (
    
<aside className="min-w-64 my-10 rounded-lg drop-shadow-sm shadow-sm" aria-label="Sidebar">
   <div className="p-2 lg:py-4 lg:px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
      <Fetch
            url="category/list"
            renderSuccess={({ data: { categories } }) => (
            <>
            {categories.map(category => (
             <CategoryList key={category.id} category={categories} />
              ))} 
            </>
            )}
        />
      </ul>
   </div>
</aside>

  )
}

export default Categories