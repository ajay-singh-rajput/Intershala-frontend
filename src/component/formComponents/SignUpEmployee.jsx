import React, { useState } from 'react'

const SignUpEmployee = () => {

    
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState('');
const [city, setCity] = useState('');
const [organizationName, setOrganizationName] = useState('');
const [password, setPassword] = useState('');
    const submitHandlerStudent = async (e)=>{
        e.preventDefault();
        
        try {
          const respo = await axios({
            method:'post',
            url:"http://localhost:8080/employee/signup",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data:{
              firstName:firstName,
              lastName:lastName,
              email:email,
              contact:contact,
              city:city,
              organizationName:organizationName,
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
        <label className="block mt-3 font-semibold">Organization Name</label>
        <input onChange={(e)=>setOrganizationName(e.target.value)} value={organizationName} type="text" placeholder="Organization Name" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        </div>
        <label className="block mt-3 font-semibold">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} autoComplete='' type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className="flex justify-between items-baseline">
          <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Login</button>
          
        </div>
      </form>
    </>
  )
}

export default SignUpEmployee