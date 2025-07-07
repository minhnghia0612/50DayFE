import './Content.css' 

function Content({image, title, isActive, onClick}) {
    return(
        <>
            <div onClick={onClick} className={`tab-btn ${isActive ? "activate": ""}`}>
                <img src={image} alt=""/>
                <h3>{title}</h3>
            </div>
        </>
    )
}

export default Content;