import './Content.css'
import Block from './Block'
import { useState } from 'react'

function Content(){
    const blocks = Array.from({ length:5 })
    const [active, setActive] = useState(0)
    const [hoverd, setHoverd] = useState(false)
    
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", "fill")
    }

    const handleDropFill= (index) =>{
        setActive(index)
        setHoverd(null)
    } 

    return(
        <div className='container'>
            {
                blocks.map((_, index) => (
                    <Block key = {index}
                            index = {index}
                            hasFill ={active === index}
                            hasHover = {hoverd === index}
                            onDropFill={handleDropFill}
                            onDragStart={handleDragStart}
                            onDragEnter={setHoverd}
                            onDragLeave={() => setHoverd(null)} />
                ))
            }
        </div> 
    )
}
export default Content;