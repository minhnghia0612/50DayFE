import './Box.css'

function Box({active, onClick}){

    return(
            <div className={`box ${active ? 'active': ''}`} onClick={onClick}>250 ml</div>
    )
}
export default Box;