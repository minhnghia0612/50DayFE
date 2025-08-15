import './Cup.css'

function Cup({percent}){
    const showFill = percent > 0;
    const remaining = 100 - percent;

    return(
        <>
        <div className="cup" percent={percent}>
            <div className={`cup-fill ${showFill ? 'show' : ''}`} style={{height: `${percent}%`}}>
                <p>{percent}%</p>
            </div>
            <div className="cup-remaining" style={{height:`${remaining}%`}}>
                <p>{2 - (2 * (percent/100))}L</p>
                <span>Remained</span>
            </div>
        </div>
        </>
    )
}
export default Cup;