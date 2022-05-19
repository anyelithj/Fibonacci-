import React, { useEffect, useState } from 'react'
import '../App.css'

const Fibonacci = () => {
  const date = new Date();

  const [hour, setHour] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getMinutes());
  const [result, setResult] = useState(0);
  let min = String(minutes).split("");
  let [x, y] = min;
  console.log("sec" ,typeof seconds);

  let fibonacci = () => {
    let sum = 0;
    for (let i = 1; i <= seconds; i++) {
      sum = Number(x) + Number(y);
      x = Number(y);
      y = sum;
    }
    return setResult(Number(sum));
   
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getMinutes());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className='panel'>
        <span>{hour}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        <button onClick={fibonacci}>Calcular</button>
      </div>
      <div>
        <span>{result}</span>
      </div>
    </>
  );
};


export default Fibonacci
