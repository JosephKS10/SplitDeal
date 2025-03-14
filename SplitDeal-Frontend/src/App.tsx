import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { IconCloudDemo } from './components/IconCloudDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl text-green-500 font-bold underline">
      Hello world!
    </h1>   
    <Button>Click Me!</Button>
    <IconCloudDemo/>
    </>
  )
}

export default App
