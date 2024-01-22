import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Api from '../API/Api';

const SignInFormStudent = () => {

    
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    const submitHandlerStudent = async (e)=>{

        e.preventDefault();

        if (false) {
          const returnData = await Api.post('/student/signIn',{email:email,password:password})
          console.log(returnData)
          if(returnData) {
           if(returnData.status < 299){
            if(returnData.data.id && returnData.data.success){
              sessionStorage.setItem('Token',`${returnData.data.token}`);
              sessionStorage.setItem('userType',returnData.data.userType);
              sessionStorage.setItem('id',returnData.data.id);
              console.log(sessionStorage.getItem('id'));
              
            }
          } else{
            if(returnData.response.status > 299){
              // console.log(returnData)
            } 
          } } else {toast.warn('Unable to connect with server')  };
  
        }
       
        
        if(1 === 1){
          try {
            const respo = await axios({
              method:'post',
              url:"http://localhost:8080/student/signIn",
              headers: { 'content-type': 'application/x-www-form-urlencoded' },
              data:{
                email:email,
                password:password
              }
            })
            console.log(respo)
            if(respo.data.id && respo.data.success){
              sessionStorage.setItem('isLogin',[respo.data.id,respo.data.token,respo.data.userType])
              console.log(sessionStorage.getItem('isLogin'));
            }
          } catch (error) {
            console.log(error)
            if(error.request.status > 299){
              toast.error(error.response.data.message)
            } else{
              toast.error(error.message)
            }
          }
      } 
        }
  

    useEffect(() => {
      console.log(sessionStorage.getItem('id'))
    
      return () => {
        
      }
    }, [])
    
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

export default SignInFormStudent