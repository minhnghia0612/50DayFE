import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

function Navbar({active}) {
    return (
        <nav >
            <ul className={active ? 'navBar' : ''}>
                <li className="nav-home"><FaHome className='icon' />Home</li>
                <li className="nav-about"><FaUser className='icon' />About</li>
                <li className="nav-contact"><TbMailFilled className='icon' />Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar;