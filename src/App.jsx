import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Mybutton'

function App() {
  const [count, setCount] =useState(0)

  return (
    <div>
      <MyButton count = {count} setCount = {setCount}/>
      <MyButton count = {count} setCount = {setCount}/>      
      

    </div>
  )
}

export default App
