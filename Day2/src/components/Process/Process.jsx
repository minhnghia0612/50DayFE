import './Process.css';

function Process({ children , isActive  }) {
    return(
        <div className={`process ${isActive ? "active" : ""}`}>
            {children}
        </div>
    );
}

export default Process;
