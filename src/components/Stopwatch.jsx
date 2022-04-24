import './Stopwatch.css'

import { useEffect, useState } from "react"

export const Stopwatch = ()=>{
    const [time,setTime] = useState(0);
    const [timeron,setTimeron] = useState(false);
    useEffect(()=>{
        let interval = null;

        if(timeron){
            interval = setInterval(() => {
                setTime((prevtime) =>{ return (prevtime+10)})
            }, 10);
        }
        else{
            clearInterval(interval);
        }

        return ()=>{clearInterval(interval)};
    },[timeron])
    return (
        <div>
            <h2>MASAI STOPWATCH</h2>
            <div>
                <h1>
                <span>{(('0'+Math.floor(time/60000)%60)).slice(-2)}:</span>
                <span>{(('0'+Math.floor(time/1000)%60)).slice(-2)}:</span>
                <span>{(('0'+(time/10)%100)).slice(-2)}:</span>
                </h1>
            </div>
            <div>
                {!timeron  && (
                    <button onClick={()=>{setTimeron(true)}}>Start</button>
                )}
                {timeron && (
                    <button onClick={()=>{setTimeron(false)}}>Stop</button>
                )}
                <button onClick={()=>{setTime(0); setTimeron(false)}}>Reset</button>
            </div>
        </div>
    )
    
}