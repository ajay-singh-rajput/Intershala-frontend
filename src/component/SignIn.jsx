import React, { useState } from 'react'
import SignInFormStudent from './formComponents/SignInStudent';
import SignInEmployee from './formComponents/SignInEmployee';
import { motion } from 'framer-motion';

const SignIn = () => {
    const [check, setCheck] = useState(true);
  const [trans, setTrans] = useState(true)
  const changeFormClickHandler = ()=>{
    setCheck(!check);
    setTrans(!trans);
  };
  const emptyVariant = {
    initial:{},
    animate:{},
    exit:{}
  }
  const variant = {
    initial:{
      backgroundColor:'hsl(0, 0%, 100%)',
      boxShadow:"0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, inset 0px 6px 5px 0px #00000024"
    },
    animate:{
      backgroundColor:"hsla(0, 0%, 87%, 0)",
      boxShadow:"0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, inset 0px -6px 5px 0px #00000024"
    },
    exit:{
      backgroundColor:'hsl(0, 0%, 100%)',
      boxShadow:"0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, inset 0px 6px 5px 0px #00000024"
    }
  }


  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl mx-auto text-center">
    <span className="text-2xl font-light">SignIn to your account</span>
    <div  className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
      <motion.div onClick={changeFormClickHandler} variants={emptyVariant} initial="initial" transition={{ease:[0.25, 0.1, 0.25, 1],duration:0.2}} className=" bg-indigo-400 rounded-t-md flex pt-1 ">
        <motion.span variants={variant} animate={!trans?'animate':'exit'} className='w-[50%] text-center py-2 bg-white shadow-[inset_0px_6px_5px_0px_#00000024]'>Student</motion.span>
        <motion.span variants={variant} animate={trans?'animate':'exit'} className='w-[50%] text-center py-2 shadow-[inset_0px_-6px_5px_0px_#00000024]'>Employer</motion.span>
      </motion.div>
      {check?<SignInFormStudent/>:<SignInEmployee />}
    </div>
  </div>
</div>
    </>
  )
}

export default SignIn