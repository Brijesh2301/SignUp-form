import { useState } from 'react'
import './App.css'
import Facebooksignup from './components/Facebooksignup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Facebooksignup></Facebooksignup>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
