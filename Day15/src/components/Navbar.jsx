import './Navbar.css'
import { useState,useEffect } from 'react'

function Navbar({icon,count,title}){
    const [precent, setPrecent] = useState(0);
    useEffect(() => {
        const stepTime = 200/count; 
        const interval = setInterval(() => {
            setPrecent(prev =>{
                if(prev >= count){
                    clearInterval(interval);
                    return count;
                }
                return Math.ceil(prev + count/200);
            })
        },stepTime)
            return () =>  clearInterval(interval);
        }, [count])

    return(
        <div className="container-nav">
            <div className="icon">{icon}</div>
            <div className="count">{precent}</div>
            <div className="title">{title}</div>
        </div>
    )
}
export default Navbar