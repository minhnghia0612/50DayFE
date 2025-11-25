import './Menu.css'
import { useEffect, useState } from 'react'

function Menu(){
    const [pull, isPull] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const imgHeight = window.innerHeight*30 / 100;
            console.log(imgHeight)
            if( window.scrollY > imgHeight )
                isPull(true)
            else
                isPull(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    }, [])
    return(
        <div className={`menu ${pull ? 'active' : ''}`}>
            <div className="menu-container">
                <div className="menu-left">
                    <a href='#'>My Website</a>
                </div>
                <div className="menu-right">
                    <ul>
                        <a href='#' style={{color: 'red'}}>Home</a >
                        <a href='#'>About</a >
                        <a href='#'>Services</a >
                        <a href='#'>Contact</a >
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu 