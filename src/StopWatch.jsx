import React,{useState,useEffect,useRef} from 'react'

 function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime,setElapsedTime] = useState(0);
    const intervelIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() =>{
        if(isRunning){
           intervelIdRef.current = setInterval(() =>{
                setElapsedTime(Date.now() -startTimeRef.current)
            },10);
        }
        return () =>{
            clearInterval(intervelIdRef.current);
        }
    },[isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime;
        
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false)
    }
    function formatTime(){
        let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elaspedTime / (1000) % 60 );
        let milliseconds = Math.floor(elaspedTime % 1000  / 10);


        return ` ${addZero(minutes)}: ${addZero(seconds)}: ${addZero(milliseconds)}`;
    }

    function addZero(number){
     return    (number < 10 ? "0":"" ) + number;
    }

  return (
    <div className='stopwatch'>
      <div className='display'>{formatTime()}</div>
      <div className='controls'>
        <button onClick={start} className='start-button'>Start</button>
        <button onClick={stop} className='stop-button'>Stop</button>
        <button onClick={reset} className='reset-button'>Reset</button>
        
      </div>
    </div>
  )
}
export default StopWatch;