import React from 'react'

const DataTable = ({  }) => {
    const headings = ['Photo', 'Title', 'Body',  'Date Created', ]
    const table =  ["article title", 'article body', 'article date']
  return (
    <div className="flex flex-col text-left mt-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="
                        shadow
                        overflow-hidden
                        border-b border-gray-200
                        sm:rounded-lg
                        ">
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
                { headings.map(head => (
                     <tr key={head}>

                     <td className="px-6 py-4 whitespace-nowrap text-center">
                           <a href="">
                       <div className="flex items-center">
                         <div className="flex-shrink-0 h-10 w-10">
                           <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt=""
                                />
                         </div>
                       </div>
                      </a>
                     </td>
                     { table.map(ta => (
                     <td key={ta} className="px-6 py-4 whitespace-nowrap">
                     <div className="text-sm text-gray-700">{ta}</div>
                     </td>
                     )) }
                    
                     <td  className="
                                px-6
                                py-4
                                whitespace-nowrap
                               text-sm
                                font-medium
                                "
                         >
                       <a href="" className="text-indigo-400 hover:text-indigo-600 p-3">
                        <span className="px-4 py-1 text-blue-600 hover:bg- bg-blue-200 rounded-full">Edit</span>
                    </a>
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
                       <a href="" className="text-indigo-400 hover:text-indigo-600"
                          ><span className="px-4 py-1 text-red-600 hover:bg-red-300 bg-red-200 rounded-full">Delete</span></a
                         >
                     </td>
                   </tr>
                    )) }   
                 

            </tbody>
          
              </table>

            </div>
          </div>

        </div>
      </div>
  )
}

export default DataTable;