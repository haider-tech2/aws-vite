import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formapp from './component/Formapp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Formapp/>

    </>
  )
}

export default App
