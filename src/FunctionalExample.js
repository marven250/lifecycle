import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function FunctionalExample() {
    const [status, setStatus] = useState(false);
    const [count, setCount]   = useState(1)
    const [catFact, setCatFact] = useState("");

    useEffect( ()=>{
         callApi().then(response=>{
            setCatFact(response)
         });
        
    }, [])

    const callApi = async ()=>{
        const response = await axios.get("https://catfact.ninja/fact");
        const data = await response.data;
        return data.fact
    }

    //similar to using componentDidMount lifecycle method in classical component
    // useEffect(()=>{
    //     console.log("functionalExample.js component mounted")
    // }, [])

    //similar to using componentDidUpdate lifecycle method in classical component
    // useEffect(()=>{
    //     console.log("functionalExample.js component updated")
    // })
    //similar to using componentWillUnmount lifecycle method in classical component
    // useEffect(()=>{

    //     return ()=>{
    //         console.log("functionalExample.js component unmounted")
    //     }
    // })

    //This will only fire off when the status tate changes



  return (
    <>
    <div>FunctionalExample</div>
    <button onClick={()=> setStatus(!status)}>toggle status state</button>
    {catFact? <div>{catFact}</div> : <div>catFact is loading</div>}
    </>
  )
}
