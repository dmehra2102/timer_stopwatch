import { useEffect, useState } from 'react'
import './Timer.css'

export const Timer = ()=>{
    
    const [time,setTime] = useState(0);
    const [timeron,setTimeron] = useState(false);
    useEffect(()=>{
        let interval = null;
        if(timeron){
            interval = setInterval(() => {
                setTime((prevtime)=>{return (prevtime-10)})
            }, 10);
       }
       else{
           clearInterval(interval);
       }
       return ()=>{clearInterval(interval)}
    },[timeron])
    return (
        <div>
            <h2> MASAI TIMER</h2>
            <div>
                <input onChange={(e)=>{setTime(e.target.value)}} type="number" id="timer"/>
            </div>
            <div>
                <h1>
                    <span>{('0'+Math.floor((time/60000)%60)).slice(-2)}h:</span>
                    <span>{('0'+Math.floor((time/1000)%60)).slice(-2)}m:</span>
                    <span>{('0'+((time/10)%100)).slice(-2)}s</span>
                </h1>
            </div>
            <div className='btn'>
                <button onClick={()=>{setTimeron(true)}}>Start</button>
                <button onClick={()=>{setTimeron(false)}}>Stop</button>
                <button onClick={()=>{setTime(0); setTimeron(false)}}>Reset</button>
            </div>
        </div>
    )
}