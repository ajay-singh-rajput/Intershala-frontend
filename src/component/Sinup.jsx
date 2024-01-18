import axios from 'axios';
import React, { useState } from 'react'
import SignUpForm from './formComponents/SignUpStudnet';

const Sinup = () => {

  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl mx-auto text-center">
    <span className="text-2xl font-light">Sign-up to your account</span>
    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
      <div className=" bg-indigo-400 rounded-t-md flex pt-1 ">
        <span className='w-[50%] text-center py-2 bg-white shadow-[inset_0px_6px_5px_0px_#00000024]'>Student</span>
        <span className='w-[50%] text-center py-2 shadow-[inset_0px_-6px_5px_0px_#00000024]'>Employer</span>
      </div>
      <SignUpForm/>
    </div>
  </div>
</div>
    </>
  )
}

export default Sinup