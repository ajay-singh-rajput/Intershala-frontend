import React from 'react'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import Sinup from './component/Sinup'
import axios from 'axios'


const App = () => {

  const connectServer = async ()=>{
    try {
      const {data} = await axios.get("http://localhost:8080/")
    console.log(data)
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <>
    <div>
      <Nav/>
      <button onClick={connectServer}>connect</button>

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