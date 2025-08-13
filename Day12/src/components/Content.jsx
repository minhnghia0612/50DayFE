import './Content.css'
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

function Content({title,text}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="content-container">
            <div className={`faq ${isOpen ? 'active' : ''}`}>
                <h3 className='faq-title'>{title}</h3>
                {isOpen && <p className='faq-text'>{text}</p>}
                <button className={`btn-faq ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <AiOutlineClose className='icon-close'/> : <AiOutlineDown className='icon-open'/>}
                </button>
            </div>
        </div>
    )
}

export default Content;