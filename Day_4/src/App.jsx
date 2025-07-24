import Search from './components/Search'
import './App.css'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Search active={active} setActive={setActive}></Search>
    </>
  )
}

export default App
