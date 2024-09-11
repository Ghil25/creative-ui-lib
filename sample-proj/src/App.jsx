import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../../src/components/Input/Button/Button'
import theme from "../../src/components/Theme/light/light"
function App() {
  console.log(theme)
  return (
    <>
      <Button sx={{ backgroundColor: 'secondary.400'}}></Button>
      
    
    </>
  )
}

export default App
