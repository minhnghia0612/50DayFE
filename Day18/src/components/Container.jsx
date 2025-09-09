import Content from "./Content";
import { useState } from "react";
import { dataContent } from "./dataContent";

function Container() {
    const [activeIndex, setActiveIndex] = useState(0);
    function handleNext() {
        setActiveIndex((index) =>
            index === dataContent.length - 1 ? 0 : index + 1      // length-1 để lấy max nếu index = max thì về 0 nếu chưa thì tăng thêm 1
    );
    }
    function handlePrev() {
        setActiveIndex((index) =>
            index === 0 ? dataContent.length - 1 : index - 1      
    );
    }

    return(
        <div className="container">
            <Content activeIndex={activeIndex} 
            onNext={handleNext}
             onPrev={handlePrev}></Content>
        </div>
    )
}

export default Container;   