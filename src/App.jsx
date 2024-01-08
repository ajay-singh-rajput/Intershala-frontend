import React from 'react'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import Sinup from './component/Sinup'


const App = () => {
  return (
    <>
    <div>
      <Nav/>

      <div>
        <Routes>
          <Route path='/register' element={<Sinup/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App