import React from 'react'
import { useLoginMutation } from '../Slices/LoginApiSlice'
import { useState } from 'react'
import Loading from '../Components/Loading'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const LoginScreen = (props) => 
{

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    const [LoginApiCaller,{isLoading:loginLoading}] = useLoginMutation()
     
    const onClickFormSubmit = async (e) => 
    {
      e.preventDefault();

      try 
      {
          const response = await LoginApiCaller({ username: name, password: password }).unwrap();
          Cookies.set('jwt_token', response.jwt_token, { expires: 30 })
          // console.log(response.jwt_token);
          const { history } = props 
          history.replace('/home')
      } 
      catch (err) 
      {
          toast.error(err?.data?.error_msg|| 'Invalid Username');
      }
  }
    

    if (loginLoading)
    {
      return <Loading message="Logging in..." />
    }

    if (Cookies.get('jwt_token'))
    {
      return <Redirect to='/home' />
    }

    const LoginScreenJsx = 
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-cover bg-center px-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3')" }}>
        
        <form className="bg-white p-4 rounded shadow-md w-full max-w-md" onSubmit={onClickFormSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input type="text" className="form-control" placeholder="Enter username" onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <button className="btn !bg-green-500 text-white w-100">Login</button>
        </form>
      
    </div>

    return LoginScreenJsx
}

export default LoginScreen