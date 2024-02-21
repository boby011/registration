import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';

export const Login = () => {
  const [data, setData] = useState('')
  const regData = useSelector((state) => state.reg.data)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setData(data)
    try {



      let response = await axios.post('http://localhost:4000/loginOne', data)
      console.log(response);
      if (response.data) {
        console.log('success');
        //   toast.success('success')

        // }
        // else{
        //   toast.error('invalid')
        // }


        
      }
      else{
        toast.error('invalid username or password')
      }
    }
      catch (e) {
        console.error(e);
      }
  }
      return (
        <>
          <ToastContainer />
          <div className='d-flex flex-column align-items-center reg'>
            <form actiom="" onSubmit={handleSubmit}>
              <input type="text" className='form-control mt-3 mb-3' onChange={handleChange} name="username" id="" placeholder='username' />
              <input type="text" className='form-control mt-3 mb-3' onChange={handleChange} name="password" id="" placeholder='password' />
              <input type="submit" className='btn btn-dark  mt-3' value="Login" id="" />
            </form>
          </div>

        </>
      )
    }
  
