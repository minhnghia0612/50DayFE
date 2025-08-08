import './SplitBox.css';

function SplitBox({ side, title, img, onMouseEnter, onMouseLeave }) {
    return (
        <div className={`split ${side}`} style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <h1>{title}</h1>
            <a href="#" className='btn'>buy now</a>
        </div>
    );
}

export default SplitBox;