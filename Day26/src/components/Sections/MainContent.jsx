// MainContent.js
import './LeftContent.css'
import './RightContent.css'
import './MainContent.css'
import Content from './Content';

function MainContent({ currentIndex, images, colors, contents, details }) {
    // 0 -> -100vh -> -200vh -> -300vh
    const transformStyle = {
        transform: `translateY(-${currentIndex * 100}vh)`
    };
    //Index = 0 -> -(3 - 0)*100 = -300vh
    const tranformStyleRight = {
        transform: `translateY(-${(images.length - 1 - currentIndex) * 100}vh)`
    };

    return (
        <div className='container'>
            <Content variant="left">
                <div className="content-wrapper-hidden">
                    <div className="slider-track" style={transformStyle}>
                        {colors.map((colorItem, index) => (
                            <div key={index} className="slide-item">
                                <div className="bg-content" style={{ backgroundColor: colorItem }}>
                                    <h1>{contents[index]}</h1>
                                    <p>{details[index]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>

            <Content variant="right">
                <div className="content-wrapper-hidden">
                    <div className="slider-track" style={tranformStyleRight}>
                        {/* Dùng slice reverse sẽ đảo ngược mảng không thay đổi cấu trúc hiện tại */}
                        {images.slice().reverse().map((imgItem, index) => (
                            <div key={index} className="slide-item">
                                <div 
                                    className="bg" 
                                    style={{ backgroundImage: `url(${imgItem})` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default MainContent