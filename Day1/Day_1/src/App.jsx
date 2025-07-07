import { useState } from 'react';
import './App.css';
import Content from './components/content/content';
import { datacontent } from './components/Content/db';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleClick(index) {
    setActiveIndex(index);
  }
  return (
    <div className='container'>
       {datacontent.map((item, index) => (
        <Content
          key={index}
          image={item.image}
          title={item.title}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
       ))}
    </div>
  );
}

export default App;
