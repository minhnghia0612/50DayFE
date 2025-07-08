import './App.css'
import Button from './components/Button/Button'
import Process from './components/Process/Process'
import { useState } from 'react'
function App() {
  const data = [1,2,3,4]
  const [activeIndex, setActiveIndex] = useState(1)
  const handleNext = () => {
    if (activeIndex < data.length) {
      setActiveIndex(activeIndex + 1)
    }
  }
  const handlePrev = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1)
    }
  }
  return (
    <>
      <div className="container">
        <div className="process-container"
          style = {{
            '--process-width':`${(activeIndex-1) / (data.length - 1) * 100}%`, // tính tỉ lệ phần trăm tiến trình
          }}>
          {data.map((index) =>(
            <Process key = {index} isActive={activeIndex >= index}>  
              {index}
            </Process>
            
          ))}
        </div>
        <Button onClick ={handlePrev} disabled={activeIndex === 1}>Prev</Button>
        <Button onClick ={handleNext} disabled={activeIndex === data.length}>Next</Button>
      </div>
    </>
  )
}

export default App
