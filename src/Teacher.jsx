import React from 'react'
import { useSelector } from 'react-redux'

const Teacher = () => {
  const regData = useSelector((state) => state.reg.data)
  console.log(regData);
  return (
    <div>
      <h1>Details</h1>
      <p>Username:{regData.username}</p>
      <p>Firstname:{regData.firstName}</p>
      <p>Last name:{regData.lastName}</p>
      <p>Age:{regData.age}</p>
    </div>
  )
}

export default Teacher