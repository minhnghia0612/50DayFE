import { useInView } from 'react-intersection-observer'
import './Content.css'

function Box ({children}){
    const { ref, inView } = useInView({
        threshold: 0.2,

    })

    return(
        <div ref={ref} className={`box ${inView ? 'show': ''}`}>
            {children}
        </div>
    )
}
export default Box;