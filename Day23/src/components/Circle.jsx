import './Circle.css'

function Circle () {
    return(
        <div className="circle">
            {/* <div className="circle1" style = {{transform:`rotate(${rotatiton1}deg)` }}></div>
            <div className="circle2" style = {{transform:`rotate(${rotatiton2}deg)` }}></div> */}
            <div className="circle-base circle1"></div>
            <div className="circle-base circle2"></div>
        </div>
    )
}

export default Circle