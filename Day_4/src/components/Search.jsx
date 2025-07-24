import './Search.css';
import { FaSearch } from "react-icons/fa";


function Search({active, setActive}) {
    function handleClick() {
        setActive(!active);
    }
    return(
        <div className={`search ${active ? 'active' : ''}`}>
            <button className='btn' onClick={handleClick}><FaSearch className='icon'/></button>
            <input type="text" placeholder='Search...' className='input'/>
        </div>
    );    
}
export default Search;