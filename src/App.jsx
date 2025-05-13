import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Hero></Hero>
    </>
  )
}

export default App
