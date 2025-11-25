import './App.css'
import Search from './components/Search.jsx'
import Content from './components/Content.jsx'
import { useState } from 'react'

function App() {
  const [card, setCard] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  return (
    <>
      <Search setCard={setCard} setRepos={setRepos} setError={setError} />
      <Content Card={card} repos={repos} error={error} />
    </>
  )
}

export default App
