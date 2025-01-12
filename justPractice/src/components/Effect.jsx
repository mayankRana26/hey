    import {useState, useEffect } from "react";
    const Effect=() => {
 const [count, setCount] = useState(0);

        useEffect(()=>{
            console.log(`Count changed to ${count} without using dependency array`);
            
        },[count]);
       
            return (
                <>
                <h1>useEffect</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                </>
            )
        };
        
        export default Effect;