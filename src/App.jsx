import Calc from './assets/components/calc'
import './App.css'
import { useState } from 'react'


function App() {
  

  return (
    <div className='body'>

      <div className="title">
        <h1>Calculadora de IMC</h1>
      </div>

      <div className='p-area'>
        <Calc />
      </div>
    </div>
    
  )
}

export default App
