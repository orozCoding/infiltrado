import { useState } from 'react'
import Game from './components/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className="font-bold">El infiltrado</h1>
      <Game />
    </div>
  )
}

export default App
