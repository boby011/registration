import React from 'react'
import { ThemeContext } from './ThemeProvider'
import './App.css'
import './Form'
import { Link, Outlet } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const Navigation = () => {
  return (
    <>
      <div className='flex'>
        <div className='head'>
          <h2>VooDoo</h2>
        </div>

        <div className='list'>

          <Link to='/example'> <span>Home</span></Link>
          <Link to='/Form'><span>Register</span></Link>
          <Link to='/Login'><span>Login</span></Link>

        </div>
      </div>
      <Outlet />
    </>
    // <div className='about'>
    //       <ul>
    //         <li><a href="">Home</a></li>
    //         <li><a href="">About</a></li>
    //         <li><a href="">Contact</a></li>
    //         <li><a href=""></a></li>

    //       </ul>
    //    </div>

  )
}