import './Button.css';

function Button({ children,onPlay}) {

  return (
    <button className="btn" onClick={onPlay}>{children}</button>
  );
}
export default Button;