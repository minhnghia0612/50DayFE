import {  useEffect,useState } from "react";
import './Content.css'

function Content(){
    const[isDark, setisDark]=useState(false);
    useEffect(()=>{
        if(isDark){
            document.body.style.backgroundColor='black';
            document.body.style.transition='all 0.5s ease-in';
        }else{
            document.body.style.backgroundColor='white';
            document.body.style.transition='all 0.5s ease-in';
        }
    },[isDark])

    useEffect(()=>{
        const hourEl = document.querySelector('.hour');
        const minuteEl = document.querySelector('.minute');
        const secondEl = document.querySelector('.second');
        const timeEl = document.querySelector('.time');
        const dayEl = document.querySelector('.daytext');
        const daycricle = document.querySelector('.circleday');

        function getTime(){
            const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const now = new Date();
            const month = months[now.getMonth()];
            const day = days[now.getDay()];
            const date = now.getDate();
            const hour = now.getHours();
            const hoursForClock = hour % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
        
            const hourdeg = (hoursForClock + minutes / 60 ) * 30; // 360/12 = 30
            const minutedeg = (minutes + minutes / 60) * 6; // 360/60 = 6 
            const seconddeg = seconds * 6; 

            if(hourEl) hourEl.style.transform = `translate(-50%, -100%) rotate(${hourdeg}deg)`;
            if(minuteEl) minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutedeg}deg)`;
            if(secondEl) secondEl.style.transform = `translate(-50%, -100%) rotate(${seconddeg}deg)`;
            
            timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false,  });
            dayEl.textContent = `${day}, ${month}`;
            daycricle.textContent = `${date}`;
        }   
        getTime();
        const interval = setInterval(getTime,1000);
        return () => clearInterval(interval);
    },[])

    return(
        <>
            <button onClick = {() => setisDark(!isDark)} 
                    className={`btn ${isDark ? 'light' : 'dark'}`}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="clock-container">
                <div className="clock">
                    <div className={`hour ${isDark ? 'light': 'dark'}`}></div>
                    <div className={`minute ${isDark ? 'light': 'dark'}`}></div>
                    <div className="second"></div>
                    <div className={`center-point ${isDark ? 'light': 'dark'}`}></div>
                </div>
                <div className={`time ${isDark ? 'light' : 'dark'}`}></div>
                <div className={"day"}>
                    <div className="daytext"></div>
                    <div className={`circleday ${isDark ? 'light' : 'dark'}`}></div>
                </div>
            </div>
        </>
    )
}
export default Content;