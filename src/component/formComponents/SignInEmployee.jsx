import React, { useState } from 'react'
import { toast } from 'react-toastify';

const SignInEmployee = () => {

    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const submitHandlerStudent = async (e)=>{
        e.preventDefault();
        
        try {
          const respo = await axios({

            method:'post',
            url:"http://localhost:8080/employee/signIn",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data:{
              email:email,
              password:password
            }
          })
          console.log(respo)
        } catch (error) {
         console.log(error)
          if(error.request.status > 0){
            toast.error(error.response.data.message)
          } else{
            toast.error(error.message)
          }
        }
        
        
    } 
  return (
    <>
    <form onSubmit={submitHandlerStudent} className="py-6 px-8">
        <label className="block font-semibold">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block mt-3 font-semibold">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} autoComplete='' type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className="flex justify-between items-baseline">
          <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Login</button>
        </div>
      </form>
    </>
  )
}

export default SignInEmployee