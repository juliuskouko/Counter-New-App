import React, {useState} from "react";


 function CounterFunction() {
    const [count, handleCounter] = useState({number: 0});
  return (
    <>
        <h1>Counter: {count.number}</h1>
        <hr />
        <button onClick={()=> handleCounter({number: count.number + 1})}>Increase Count</button>
        <button onClick={()=> handleCounter({number: count.number - 1})}>Decrease Count</button>
        <button onClick={()=> handleCounter({number: count.number = 0})}>Reset Count</button>
    </>
  )
}

export default CounterFunction;
