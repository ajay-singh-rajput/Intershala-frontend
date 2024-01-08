import React from 'react'

const Sinup = () => {

    const submitHandlerStudent = (e)=>{
        e.preventDefault();
    }
  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl mx-auto text-center">
    <span className="text-2xl font-light">Login to your account</span>
    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
      <div className="h-2 bg-indigo-400 rounded-t-md"></div>
      <form onSubmit={submitHandlerStudent} className="py-6 px-8">
        <div className='flex gap-2'>
            <span><label className="block font-semibold">First Name</label>
        <input type="text" placeholder="First name" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/></span>
            <span><label className="block font-semibold">Last Name</label>
        <input type="text" placeholder="Last name" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/></span>
        </div>
        <label className="block font-semibold">Email</label>
        <input type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block font-semibold">Contact</label>
        <input type="number" placeholder="Contact" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <label className="block font-semibold">City</label>
        <input type="text" placeholder="City" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        <div className='flex gap-1'>
        <label className="block mt-3 font-semibold">Gender</label>
        <span className='flex '>Male<input type="Radio" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        </span>
        <span className='flex'>Female<input type="Radio"  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
        </span>
        </div>
        <label className="block mt-3 font-semibold">Password</label>
        <input type="password" placeholder="Password" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"/>
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