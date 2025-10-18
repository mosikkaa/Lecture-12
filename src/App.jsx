import { useState } from 'react'
import './App.css'
import {Comp,Footer,Main} from './Comp.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Comp />
        <Main/>
        <Footer />
    </>
  )
}

export default App
