import {useState, useEffect } from "react";

const Fetch =()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
         // Fetch data when the component mounts
        fetch("https://jsonplaceholder.typicode.com/users")

        .then(response=>response.json()) // Parse the JSON response

        .then((data)=>setData(data))  // Update state with fetched data

        .catch ((error)=>console.error("error",error));  // Handle any errors
    },[])  // Empty dependency array: runs only once

    
    return(
        <>
        <h1>hello from Fetch</h1>
        <h1>
            {data.map((user) => (
          <li key={user.id}>{user.name},{user.username}</li>
        ))}
        </h1>
        </>
    )
}
export default Fetch;