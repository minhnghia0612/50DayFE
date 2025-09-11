import './Block.css'

function Block({index, onDropFill, hasFill, onDragStart, hasHover, onDragEnter ,onDragLeave}){
    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain", "fill")
        if(data === "fill")
            onDropFill(index)
    }
    const handleDrag = (e)=>{
        e.preventDefault();
    }

    return(
        <div className={`block ${( hasHover) ? 'active' : '' }`} 
                onDrop = {handleDrop} 
                onDragOver={handleDrag}
                onDragEnter={() => onDragEnter(index)}
                onDragLeave={onDragLeave} >
            {hasFill && (
                <div
                   className="fill" draggable = "true" onDragStart={onDragStart} >
                </div>
            )}
        </div>
    )
}
export default Block