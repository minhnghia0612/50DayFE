import './Content.css'
import { useEffect, useRef } from 'react'

function Content(){
  const items =[]
  for(let i = 1 ; i<14 ; i++){
    items.push(i) ;
  }
  const boxRef = useRef([])

  useEffect(()=>{
    const checkBox = () =>{
      const sizeView = window.innerHeight * 0.8 // Lấy vùng nhìn thấy 80%
      // Dùng forEach để lặp qua tất cả phần tử
      boxRef.current.forEach((box) =>{
        if(!box) return;
        const boxTop = box.getBoundingClientRect().top
        // So sánh nếu vào vùng nhìn thấy thì add show còn k thì xóa đi
        if(boxTop < sizeView)
          box.classList.add('show')
        else
          box.classList.remove('show')
      })
    }

    window.addEventListener('scroll', checkBox)
    checkBox()
    return () =>{
      window.removeEventListener('scroll', checkBox)
    };
  },[]);

  return(
      <>
          <h1>Scroll to see the animation</h1>
          {
            items.map((item,index) => 
              (
                // Các thẻ div trên là 1 cái DOM cần phải lưu vào đâu đó để xử lý => dùng useref
                // boxref.current[index] đây dùng truy cập như mảng
                <div key ={index} ref ={(el) => (boxRef.current[index] = el)} className="box" >
                    <p>Content </p>
                </div>
            ))
          }
      </>
  )
}
export default Content