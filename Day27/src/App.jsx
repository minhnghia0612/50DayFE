import React, {useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import './App.css';

function App() {
  const count = useRef(0);
  const resetCount = useRef(null)
  const notify = () => {
    count.current +=1
    toast(`Message ${count.current}!`, {
      className: `toast-${count.current % 3}`,
    })
    if (resetCount.current) {
      clearTimeout(resetCount.current)
    }
    resetCount.current = setTimeout(() => {
      count.current = 0
    }, 1000); 
  }
  return (
    <div className="container">
      <button onClick={notify}>Show Notification</button>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
      />
    </div>
  )
}

export default App
