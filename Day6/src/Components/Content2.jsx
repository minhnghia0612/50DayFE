//Cách này cũng hay dùng hơn
// pip install npm install react-intersection-observer
import './Content.css'
import Box from './Box';
function Content2 (){
    const items = Array.from({length : 13}, (_,i) => i + 1)

    return(
        <>
            <h1>Scroll to see the animation</h1>
            {items.map((item, index) => (
                <Box key={index}>
                    <p>Content</p>
                </Box>
                
            ))}
        </>
    );
}

export default Content2