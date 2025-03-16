import React from 'react'

const Loading = () => {
  return (
    <div>
        <div className="flex animate-pulse">
  <div className="shrink-0">
    <span className="size-12 block bg-gray-200 rounded-full"></span>
    <ul className="mt-5 space-y-3">
  <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
  <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
</ul>
  </div>

  <div className="ms-4 mt-2 w-full">
    <p className="h-4 bg-gray-200 rounded-full"></p>

    <ul className="mt-5 space-y-3">
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
      <li className="w-full h-4 bg-gray-200 rounded-full"></li>
    </ul>
  </div>
</div>
    </div>
    
  )
}

export default Loading