import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(10);
  
  const [paths, setPaths] = useState([]);

  const handleClear = () => {
    setPaths([]);
  };
  return (
    <>
      <Content color = {color} strokeWidth={strokeWidth} paths={paths} setPaths={setPaths}></Content>
      <Footer color={color} setColor={setColor} strokeWidth={strokeWidth} setStrokeWidth={setStrokeWidth} onClear={handleClear}></Footer>      
    </>
  )
}

export default App
