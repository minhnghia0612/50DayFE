import './Content.css';
import SplitBox from './SplitBox';
import left from '../assets/left.jpg';
import right from '../assets/right.jpg';
import { useState } from 'react';

function Content() {
    const [isActive, setIsActive] = useState('');

    return (
        <div 
            className={`container ${isActive ? `active-${isActive}` : ''}`}
        >
            <SplitBox side="left" title="Playstation 5" img={left}
            onMouseEnter={() => setIsActive('left')}
            onMouseLeave={() => setIsActive('')} />
            <SplitBox side="right" title="Xbox Series X" img={right} 
            onMouseEnter={() => setIsActive('right')}
            onMouseLeave={() => setIsActive('')}/>
        </div>
    );
}

export default Content;