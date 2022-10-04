import React from 'react'

const TagList = () => {
    let c = ['Tech','Productivity', 'Writing', 'Studying']
    return (
      
  <aside className="min-w-64 my-8 rounded-lg shadow-sm" aria-label="Sidebar">
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

export default TagList