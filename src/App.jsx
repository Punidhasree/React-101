import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Mybutton'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Board from './components/tictoe'
import Use from './components/filterable'

function App() {


  return (
    <div>
      <Use />

    </div>
  )
}

export default App
