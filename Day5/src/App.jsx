import './App.css'
import bg from './assets/bg.avif'
import { useEffect, useState } from 'react'

function App() {
  const [precent, setPrecent] = useState(0)
  useEffect(()=>{
    const interval = setInterval(() =>{
      setPrecent(prev => {
        if (prev >=100){
          clearInterval
          return 100
        }
        return prev + 1
        })
      }, 50)
      return () => clearInterval(interval)
    }, [])
  return (
    <>
      <img src={bg} alt="bg" style={{filter: `blur(${30-precent *0.3}px)` }}/>
      <div className='time' style={{opacity:1 - precent * 0.01}}>{precent}%</div>
    </>
  )
}

export default App
