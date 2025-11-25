import { useState } from 'react';
import Button from './components/Button/Button'
import MainContent from './components/Sections/MainContent';
import { HiArrowSmallUp } from "react-icons/hi2";
import { HiArrowSmallDown } from "react-icons/hi2";
import './App.css'
import hinh1 from './assets/Hinh1.jpg' 
import hinh2 from './assets/Hinh2.jpg' 
import hinh3 from './assets/Hinh3.jpg' 
import hinh4 from './assets/Hinh4.jpg' 


const img = [hinh1, hinh4, hinh2, hinh3]
const color = ['#FFB866', '#252E33', '#2A86BA', '#FD3555']
const content = ['Flying eagle', 'Lonely castle', 'Bluuue Sky', 'Nature flower'  ]
const detail = ['in the sunset', 'in the wilderness', "with it's mountain", 'all in pink']

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleUp = () =>{
    setCurrentIndex((prev) => {
      if (prev === 0 ){
        return img.length -1 ;
      }
      return prev - 1;
    })
  } 
  const handleDown = () =>{
    setCurrentIndex((prev) => {
      if (prev === img.length -1 ){
        return 0 ;
      }
      return prev + 1;
    })
  } 
  return (
    <>
      <MainContent currentIndex = {currentIndex} images={img} colors={color} contents ={content} details={detail} ></MainContent>
      <Button variant ="up" onClick = {handleUp}>
        <HiArrowSmallUp />
      </Button>
      <Button variant ="down" onClick = {handleDown}>
        <HiArrowSmallDown />
      </Button>
    </>
  )
}

export default App
