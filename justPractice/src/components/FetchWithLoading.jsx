import { useState,useEffect } from "react";

const FetchWithLoading = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    
        useEffect(()=>{
            // Fetch data when the component mounts
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }return response.json()
            })
            .then((data)=>
                {
                    setData(data)
                    setLoading(false)
                })
                .catch((error)=>{
                    setError(error.message)
                    setLoading(false)
                })
        },[])
        if(loading){
            return<h2>Loading...</h2>
        }
        if(error){
            return<h2>{error}</h2>
        }
 
    return(
        <>
        {/* <h1>hello from fetch loading</h1> */}
        <ul >
        {data.map((user) =>(<li key={user.id}>{user.name}</li>) )}
        </ul>
        </>
    )
}

export default FetchWithLoading;