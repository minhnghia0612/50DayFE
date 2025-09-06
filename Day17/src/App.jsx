import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import './App.css'

function App() {
  const [movies, setMovie] = useState([]);

  return (
    <>
      <Header setMovie={setMovie}></Header>
      <Content movies={movies}></Content>
    </>
  )
}

export default App
