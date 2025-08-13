import './Navbar.css';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";


function Navbar() {
    const [active, isActive] = useState(false);

    return(
        <div className={`container-nav ${active ? 'active' : ''} `}>
            {active ? (<> <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className='btn' onClick={() => isActive(prev => !prev)}>
                <AiOutlineClose className='icon-close' />
            </button></>)
             : (<>
            <button className='btn' onClick={() => isActive(prev => !prev)}>
                <HiOutlineMenuAlt4 className='icon-menu' />
            </button></>)}
           
        </div>
    )
}
export default Navbar;