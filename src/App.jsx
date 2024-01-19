import React from 'react'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import SignUp from './component/SignUp'
import SignIn from './component/SignIn'


const App = () => {

  
  return (
    <>
    <div>
      <Nav/>

      <div className='pt-3'>
        <Routes>
          <Route path='/register' element={<SignUp/>}></Route>
          <Route path='/login' element={<SignIn/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App