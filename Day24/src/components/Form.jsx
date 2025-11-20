// làm shimmer effect
import './Form.css'
import './Simmer_effect.css'
import bg from '../assets/bg.jpg' 
import avt from '../assets/react.svg'
import { useEffect, useState } from 'react'

function Form() {
    const [isloading, setIsloading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsloading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`form ${isloading ? 'loading' : ''}`}>
            <div className="header">
                <img src={bg} alt="" />
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet</p>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolore perferendis</p>
                <div className="profile">
                    <img  src={avt} alt="" />
                    <div className="info">
                        <p>Cao Hữu Minh Nghĩa</p>
                        <p className='info_detail'>Oct 08,2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form