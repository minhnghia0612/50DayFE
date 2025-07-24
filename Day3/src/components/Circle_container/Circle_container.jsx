import "./Circle_container.css";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function CircleContainer({ active, setActive }) {
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="circle-container">
      <div className="circle">
          {active ? (
          <button className="icon_af" onClick={handleClick}>
            <FaBars className="icon" />
          </button>
        ) : (
          <button className="icon_bf" onClick={handleClick}>
            <FaXmark className="icon" />
          </button>
        )}
      </div>
    </div>
    );
}
export default CircleContainer;