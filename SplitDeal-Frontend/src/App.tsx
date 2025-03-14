import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { IconCloudDemo } from './components/IconCloudDemo'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  )
}

export default App
