import React, { useEffect, useState } from 'react'
import './Form'
import {useDispatch} from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'
import { Navigation } from './Navigation'
import { ToastContainer, toast } from 'react-toastify';
import { adddata } from './counterslice'
import axios from 'axios'
export const Update = () => {
    const {id}=useParams()
    useEffect(()=>{
        const fetchData=async()=>{
        let response=await axios.get(`http://localhost:4000/FindOne/${id}`)
        console.log(response.data);
        setViewData(response.data)
    }
    fetchData()
    },[])
        
        console.log(id);
        const[Viewdata,setViewData]=useState('')

  const [data, setData] = useState('')
  const [data1, setData1] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()




  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })

  }
  const handlesubmit = async(event) => {
    event.preventDefault()
    // if (data.username && data.password && data.firstName && data.lastName && data.age && data.roles) {
      dispatch(adddata(data))
      let response= await axios.put(`http://localhost:4000/update/${id}`,data)
      toast.success('Registration success')
      // setData1(data)
    setData('')
    navigate('/login')
    // }
    // else{
      // toast.error('Invalid inputs')
    // }

  }

  return (
    <>


      <div className='d-flex flex-column align-items-center reg'>
        <form onSubmit={handlesubmit}>
          <input type="text" onChange={handleChange} value={data.username?data.username:''} className='form-control mt-3 mb-3' name="username" id="" placeholder={Viewdata.username} />
          <input type="text" onChange={handleChange} value={data.password?data.password:''} className='form-control mt-3 mb-3' name="password" id="" placeholder={Viewdata.password} />
          <input type="text" onChange={handleChange} value={data.firstName?data.firstName:''} className='form-control mt-3 mb-3' name="firstName" id="" placeholder={Viewdata.firstName} />
          <input type="text" onChange={handleChange} value={data.lastName?data.lastName:''} className='form-control mt-3 mb-3' name="lastName" id="" placeholder={Viewdata.lastName} />
          <input type="text" onChange={handleChange} value={data.age?data.age:''} className='form-control mt-3 mb-3' name="age" id="" placeholder={Viewdata.age} />

          <select name="roles" id="" onChange={handleChange} value={data.roles?data.roles:''} className='form-control mt-3 mb-3'>
            <option value="">Select...</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <input type="submit" className='btn btn-dark  mt-3' name="" id="" />
        </form>
      </div>

<ToastContainer/>



    </>


  )
}