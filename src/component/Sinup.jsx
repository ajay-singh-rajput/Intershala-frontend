import axios from 'axios';
import React, { useState } from 'react'

const Sinup = () => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [city, setCity] = useState('');
const [gender, setGender] = useState('Male');
const [password, setPassword] = useState('');
    const submitHandlerStudent = async (e)=>{
        e.preventDefault();
        
        // axios.post("http://localhost:8080/student/signup",{
        //   firstName:firstName,
        //   lastName:lastName,
        //   email:email,
        //   contact:contact,
        //   city:city,
        //   gender:gender,
        //   password:password
        // })
        // .then((response)=>{
        //   console.log(response)
        // }).catch((error)=>{
        //   console.log(error)
        // })
        
        try {
          const respo = await axios({
            method:'post',
            url:"http://localhost:8080/student/signup",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data:{
              firstName:firstName,
              lastName:lastName,
              email:email,
              contact:contact,
              city:city,
              gender:gender,
              password:password
            }
          })
          console.log(respo)
        } catch (error) {
         console.log(error)
        }
        
        
    } 
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl mx-auto text-center">
    <span className="text-2xl font-light">Login to your account</span>
    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
      <div className="h-2 bg-indigo-400 rounded-t-md">
        
      </div>
      <form onSubmit={submitHandlerStudent} className="py-6 px-8">
        <div className='flex gap-2'>
            <span><label className="block font-semibold">First Name</label>
        <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" placeholder="First name" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/></span>
            <span><label className="block font-semibold">Last Name</label>
        <input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" placeholder="Last name" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/></span>
        </div>
        <label className="block font-semibold">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block font-semibold">Contact</label>
        <input onChange={(e)=>setContact(e.target.value)} value={contact} type="number" placeholder="Contact" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block font-semibold">City</label>
        <input onChange={(e)=>setCity(e.target.value)} value={city} type="text" placeholder="City" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className='flex gap-1 flex-col justify-center'>
        <label className="block mt-3 font-semibold">Gender</label>
        <span className='flex items-center gap-1'><input onChange={(e)=>setGender('Male')} checked={gender === 'Male'? true:false} type="Radio" className=" border  h-5  mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>Male
        </span>
        <span className='flex items-center gap-1'><input onChange={(e)=>setGender('Female')} checked={gender === 'Female'? true:false} type="Radio"  className=" border h-5  hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>Female
        </span>
        </div>
        <label className="block mt-3 font-semibold">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} autoComplete='' type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className="flex justify-between items-baseline">
          <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Login</button>
          <a href="#" className="text-sm hover:underline">Forgot password?</a>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default Sinup