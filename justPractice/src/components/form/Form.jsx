import { useState } from "react";
const Form=()=>{
        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [error,setError]=useState('');

        const handleSubmit=(e)=>{
            e.preventDefault();
            if(name.trim()=='' || email.trim()==''){
                setError("Please fill all the fields");
                return;
            }
            console.log("filled data")
            console.log("name is filled",name);
            console.log("email is filled",email);
      
        }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </label>

            <br />
            <label>
                email:
                <input type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </label>

            <button type="submit" >Submit</button>
           {error && <p style={{color:"red"}}>{error}</p>}
        </form>
        </>
    )
}
export default Form;