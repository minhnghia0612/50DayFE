import './Button.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Button(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchJoke = async(showLoading = true) => {
        try{
            if(showLoading) setLoading(true);
            const response = await axios.get('https://icanhazdadjoke.com',{
                headers: {
                    Accept: 'application/json'},
                })
                setData(response.data?.joke || 'No joke found');
            } catch (error) {console.error('Error fetching joke:', error);}
        finally {
            if(showLoading) setLoading(false);}
        }
    
    useEffect(() => {
        fetchJoke(true);},[]);

    const handleClick = () => {
        fetchJoke(false);};
        
    return(
        <div className='btn-container'>
            <h3>Don't Laugh Challenge</h3>
            <p className='btn-loading'>{loading ? '// joke goes here' : null} </p>
            <p className='btn-data'>{data}</p>
            <button className='btn' onClick={handleClick}>Get Another Joke</button>
        </div>
    )
}
export default Button;