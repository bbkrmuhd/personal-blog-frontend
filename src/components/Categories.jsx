import React from 'react'





const CategoryList = ({ category }) => {
  return (
    <li>
    <div  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-cyan-700 hover:text-white dark:hover:bg-gray-700">
    <span className='text-xl'>🎓</span>  
        <span className="ml-3 font-bold ">{category}</span>
        </div>
    </li>
  )
}


const Categories = () => {
    let c = ['Tech','Productivity', 'Writing', 'Studying']
  return (
    
<aside className="min-w-64 my-10 rounded-lg shadow-sm shadow-gray-300" aria-label="Sidebar">
   <div className="p-2 lg:py-4 lg:px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        {c.map(ct => (
             <CategoryList key={ct} category={ct} />
        ))}
      </ul>
   </div>
</aside>

  )
}

export default Categories