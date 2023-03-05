import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { useCategoriesData } from '../hooks/FetchData'
import { CategoryListSkeleton } from './Skeleton'


const CategoryList = ({ category } ) => {
  const {setActive} = useStateContext()
  return (
    <li>
      <Link to={`category/${category.slug}`} onClick={() => setActive(false)}>
    <div  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer hover:drop-shadow-md dark:text-white hover:bg-cyan-700 hover:text-white dark:hover:bg-gray-600">
        <span className='text-xl'>🎓</span>  
        <span className="ml-3 font-bold capitalize ">{category.name}</span>
    </div>
    </Link>
    </li>
  )
}


const Categories = () => {

  const {isLoading, data, error, isError} = useCategoriesData()

  if (isLoading){

    return (
      <aside className="min-w-64 sm:my-10 rounded-lg drop-shadow-sm shadow-sm" aria-label="Sidebar">
        <div className="p-2 lg:py-4 lg:px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
             <CategoryListSkeleton/>
            </ul>
        </div>
      </aside>
    )
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
      <aside className="min-w-64 sm:my-10 rounded-lg drop-shadow-sm shadow-sm" aria-label="Sidebar">
        <div className="p-2 lg:py-4 lg:px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
              {data?.data.categories.map(category => {
                return <CategoryList key={category.name} category={category} />
              })}
            </ul>
        </div>
      </aside>
  )
}

export default Categories