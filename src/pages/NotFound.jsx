import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
<div class="bg-gradient-to-r from-gray-300 to-gray-200">
<div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div class="bg-white shadow overflow-hidden sm:rounded-lg p-8">
<div class="border-t border-gray-200 text-center pt-8">
<h1 class="text-4xl sm:text-9xl font-bold text-gray-400">404</h1>
<h1 class="text-2xl sm:text-6xl text-gray-700 font-medium py-8">Oops! Page not found</h1>
<Link to="/"> <button class="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-gray-500 hover:to-gray-400 text-white font-semibold px-2 py-1 sm:px-6 sm:py-3 rounded-md">
RETURN HOME
</button>
</Link>
</div>
</div>
</div>
</div>
  )
}

export default NotFound