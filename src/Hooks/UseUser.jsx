import React from 'react'
import { useState,useEffect } from 'react';

const UseUser = () => {
    const[user,setuser] = useState([]);
    const[error,seterror] = useState("");

    useEffect(()=>{
        const fetchusers = async ()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                  throw new Error("Response not available")
                }
                const data = await response.json();
                setuser(data);
            }
            catch(err){
                seterror(err.message);
            }
        }
        fetchusers();
    },[])
  return {user, error}
}

export default UseUser
