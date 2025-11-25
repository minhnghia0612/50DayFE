import './App.css'
import MainContent from './components/Sections/mainContent'
import Menu from './components/Menu/menu'
import bg from './assets/bg.jpg'

function App() {

  return (
    <>
      <MainContent img = {bg}></MainContent>
      <Menu></Menu>
    </>
  )
}

export default App
