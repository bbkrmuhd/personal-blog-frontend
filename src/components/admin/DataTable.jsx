import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ToDate from '../ToDate'
import { ImageUrl } from '../ImageUrl'
import {ClipLoader} from 'react-spinners'

const DataTable = ({ data: posts, onDeletePost, loading}) => {
    const headings = ['Photo', 'Title', 'Body',  'Date Created',]


  return (
    <>
    <div className="flex flex-col text-left mt-10">
        <div className="-my-2 overflow-x-auto overflow-y-scroll sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="
                        shadow
                        overflow-hidden
                        border-b border-gray-200
                        sm:rounded-lg
                        ">
              { loading ? <ClipLoader/>
              :
              <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                  {
                      headings.map((heading, index) => (
                          <th key={index}
                      scope="col"
                      className="
                             px-6
                             py-3
                             text-left text-xs
                             font-medium
                             text-gray-500
                             uppercase
                             tracking-wider
                             "
                      >
                    {heading}
                  </th>

                      ))
                  }
              
                  <th scope="col" className=" px-6
                             py-3
                             text-left text-xs
                             font-medium
                             text-gray-500
                             uppercase
                             tracking-wider">
                   Edit
                  </th>
                    <th scope="col" className=" px-6
                             py-3
                             text-left text-xs
                             font-medium
                             text-gray-500
                             uppercase
                             tracking-wider">
                   Delete
                  </th>
                </tr>
              </thead>


      <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post, index) => (
                   <tr key={index}>

                   <td className="px-6 py-4 whitespace-nowrap text-center">
                         <a href="">
                     <div className="flex items-center">
                       <div className="flex-shrink-0 h-10 w-10">
                         <img
                              className="h-10 w-10 rounded-full"
                              src={`${ImageUrl}${post.image}`} 
                              alt="post image"
                              />
                       </div>
                     </div>
                    </a>
                   </td>
              
                   <td className="px-6 py-4 whitespace-nowrap ">
                   <div className="text-sm text-gray-700  truncate-admin  max-w-[150px]">{post.title}</div>
                   </td>
                   <td className="px-6 py-4 whitespace-nowrap">
                   <div className="text-sm text-gray-700 truncate-admin max-w-[150px]">{post.body}</div>
                   </td>
                   <td className="px-6 py-4 whitespace-nowrap ">
                   <div className="text-sm text-gray-700"><ToDate date={post.created_on}/>
                </div>
                   </td>
         
                  
                   <td  className="
                              px-6
                              py-4
                              whitespace-nowrap
                             text-sm
                              font-medium
                              "
                       >
                  <Link to="write" className="text-indigo-400 hover:text-indigo-600 p-3" state={post}>
                      <span className="px-4 py-1 text-blue-600 hover:bg- bg-blue-200 rounded-full">Edit</span>
                </Link>
                   </td>
                     <td
                       className="
                              px-6
                              py-4
                              whitespace-nowrap
                               text-sm
                              font-medium
                              "
                       >
                     <div onClick={() => onDeletePost(post.slug)} className="text-indigo-400 hover:text-indigo-600"
                        ><span className="px-4 py-1 text-red-600 hover:bg-red-300 bg-red-200 rounded-full cursor-pointer">Delete</span>
                        </div>
                   </td>
                 </tr>
                  ))}   
               

               </tbody>
        
            </table>
              }
           

            </div>
          </div>

        </div>
      </div>
    </>
    
  )
}

export default DataTable;