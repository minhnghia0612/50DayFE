import './Content.css';
import { useState } from 'react';

function Content() {
    const [text, setText] = useState('');
    const [tag, setTag] = useState([]);
    const handleKeyDown = (e) => {
        const v = e.target.value;// Lấy giá trị từ textarea
        setText(v);
        const parts = v.split(',').map(part => part.trim()).filter(Boolean);//trim dùng để cắt và filter dùng để bỏ rỗng
        setTag(parts);
    };

    return(
        <div className='container'>
            <h3>Enter all of the choices divided by a comma (',').
                <br />
                Press enter when you're done</h3>
            <textarea placeholder='Enter choices here...' id="textarea" value={text} onChange={handleKeyDown}></textarea>
            <div className='tag'>
                {tag.map((item,index) =>( <span className='tag-item' key={index}> {item} </span>))}
                </div>
        </div>
    )
}

export default Content;