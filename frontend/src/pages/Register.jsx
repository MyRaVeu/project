import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [values,setValues] = useState({
    username: '',
    email: '',
    password: '',
    repeat_password: ''
  })
  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:e.target.value  })
  }
  const handleSumbit = async (e) => {
    e.preventDefaul()
    try {
      const response = await axios.post('http://localhost:3000/auth/register', values)
      console.log(response)
    }catch(err) {
      console.log(err)
    }
    
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 border w-96'>
        <h2 className='text-lg font-bold md-4'>Register</h2>
        <form onSubmit={handleSumbit}>
          <div className='mb-4'> 
            <label htmlFor="username" className='block text-gray-700'>Username</label>
            <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border'
            name="username"onChange={handleChanges}/>
          </div>
          <div className='mb-4'> 
            <label htmlFor="email"className='block text-grey-700'>Email</label>
            <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border' 
            name="email"onChange={handleChanges}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password"className='block text-grey-700'>Password</label>
            <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border' 
            name="password"onChange={handleChanges}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="repeat_password"className='block text-grey-700'>Repeat Password</label>
            <input type="repaet_password" placeholder='Enter Repeat Password' className='w-full px-3 py-2 border' 
            name="repaet_password"onChange={handleChanges}/>
          </div>
          <button className='w-full bg-green-600 text-white py-2'>Submit</button>
        </form>
        <div className='text-center'>
          <span>Already have account?</span>
          <Link to ='/login' className='text-blue-500'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register