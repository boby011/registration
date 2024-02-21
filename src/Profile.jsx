import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export const Profile = () => {
    const{id}=useParams()
     const [data,setData]=useState([''])
     
    useEffect(()=>{
        let fetchdata=async ()=>{
            let response= await axios.get('http://localhost:4000/find')
            console.log(response,data);
            setData(response.data)
        }
        fetchdata()
    },[])

  
  return (
    <div className='d-flex gap-3 mt-5 flex-wrap '>
    
            <div style={{backgroundColor:'coral', color:'darkred',padding:'20px'}}>
            <h2>Username:{data.username}</h2>
            <h2>First name:{data.firstName}</h2>
            <h2>Last name:{data.lastName}</h2>
            <h2>Age:{data.age}</h2>
            <h2>User type:{data._id}</h2>
           
            </div>
        
    </div>
  )
}
