import './Content.css';
import { dataContent } from './dataContent';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from 'react';

function Content({activeIndex,onNext,onPrev}) {
    useEffect(() => {
        const currentItem = dataContent[activeIndex];
        if(currentItem ){
            document.body.style.backgroundImage = `url(${currentItem.image})`;
        }
    })
    return(
        <div className='content'>
            {dataContent.map((item, index) => (
                <div
                    key={index}
                    className={`image ${activeIndex === index ? 'active' : ''}`}
                    style={{backgroundImage: `url(${item.image})`}}
                >
                </div>
            ))}
            <button className ="btn-next"
                    onClick={onNext}><FaArrowRight />
            </button>
            <button className ="btn-prev" 
                    onClick={onPrev}><FaArrowLeft />
            </button>
        </div>
    )
}
export default Content;