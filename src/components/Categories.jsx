import React from 'react'





const CategoryList = ({ category }) => {
  return (
    <li>
    <div  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-cyan-700 hover:text-white dark:hover:bg-gray-700">
    <span className='text-xl'>🎓</span>  
        <span className="ml-3 font-bold">{category}</span>
        </div>
    </li>
  )
}


const Categories = () => {
    let c = ['Tech','Productivity', 'Writing', 'Studying']
  return (
    
<aside className="w-64 my-8 rounded-lg shadow-sm" aria-label="Sidebar">
   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <ul className="space-y-2">
        {c.map(ct => (

             <CategoryList category={ct} />

        ))}
        
      </ul>
   </div>
</aside>

  )
}

export default Categories