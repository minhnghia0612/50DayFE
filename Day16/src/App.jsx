import './App.css'
import Cup from './components/Cup'
import Box from './components/box'
import { useState } from 'react';

function App() {
  const [isFull, setIsFull] = useState(0)

  const handleBoxClick = (i) =>{
    setIsFull(curr => (curr === i + 1 ? i : i + 1)) // i(0->n) Đúng trả về i nếu sai thì < current thì co lại còn > current thì mở rộng ra
    //ví dụ box 3 tức i = 2 curr trước đó bằng 0 kiểm tra thấy false trả về i+1 = 3 thì 3 box sẽ được active
  }
  const percent = isFull * 12.5


  return (
    <div className='container'>
        <h1>Drink Water</h1>
        <h3>Goal: 2 liters</h3>
        <Cup percent={percent}></Cup>
        <h3>Select how many glasses of water that you have drank</h3>
        <div className="container-box">
          {Array.from({length:8}).map((_,i) => (
            <Box key ={i}
             active={i < isFull} // Các box bé hơn active thì sẽ được hoạt động
              onClick={() => handleBoxClick(i)}>
          </Box>))}
        </div>
    </div>
  )
}

export default App
