
import { useState } from "react";
function Counter(){
    const [count , setcount]=useState(0);
    function increase(){
        setcount(count+1);
    }
    function decrease(){
        setcount(count-1);
    }
    return(
        <div>
            <h1>Counter :{count}</h1>
            <button onClick={increase}>Increase</button>  &nbsp;

            <button onClick={decrease}>Decrease</button>
        </div>
    )
}
export default Counter;