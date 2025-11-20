import './Footer.css';

function Footer({ color, setColor, strokeWidth, setStrokeWidth, onClear }) {

  const handleIncrement = () => {
    if (strokeWidth >= 50) return;
    setStrokeWidth(prevWidth => prevWidth + 5);
  };

  const handleDecrement = () => {
    if (strokeWidth <= 5) return;
    setStrokeWidth(prevWidth => prevWidth - 5);
  };

  return (
    <div className="footer">
      <div className="left">
        <button onClick={handleDecrement}>-</button>
        <span>{strokeWidth}</span>
        <button onClick={handleIncrement}>+</button>
        
        <input type="color" value = {color} onChange={(event) => setColor(event.target.value)} />
      </div>

      <div className="right">
        <button onClick={onClear}>X</button>
      </div>
    </div>
  );
}

export default Footer;