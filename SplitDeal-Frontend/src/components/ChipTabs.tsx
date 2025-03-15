import React from 'react'
import { Link } from 'react-router-dom'

const ChipTabs = () => {
  return (
        <div>
            <ul className='flex justify-center items-center space-x-2'>
                <Link to='/sidebar'>Sidebar</Link>
                <Link to='/aboutus'>aboutUs</Link>
                <a href='streets.in'>Home</a>
                <a href='streets.in'>Home</a>
            </ul>
        </div>
  )
}

export default ChipTabs

