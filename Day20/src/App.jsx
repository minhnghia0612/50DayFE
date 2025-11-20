import { useState } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState(null)

  function handleClick(e){
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClick({x, y})
    
    setTimeout(() => setClick(null), 300)
  }

  return (
    <>
      <button onClick={handleClick}>
              click me
              {click && (
                <div
                    className='active'
                    style = {{left: click.x , top: click.y}}
                ></div>
              )}
      </button>
    </>
  )
}

export default App
