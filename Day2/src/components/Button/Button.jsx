import './Button.css';

function Button({children, onClick, disabled}) { // Truyền bằng children để có thể truyền nội dung vào nút
    return (
        <button className="btn" onClick={onClick} disabled={disabled}> 
            {children}
        </button>
    );   
}

export default Button;