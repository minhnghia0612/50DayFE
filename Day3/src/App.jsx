import { useState } from 'react'
import './App.css'
import Content from './components/Content/Content'
import Circle_container from './components/Circle_container/Circle_container'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={`container ${!active ? 'rotate' : ''}`}>
        <Circle_container setActive={setActive} active={active} ></Circle_container>
        <Content></Content>
      </div>
      <Navbar active={!active}></Navbar>
    </>
  )
}

export default App
