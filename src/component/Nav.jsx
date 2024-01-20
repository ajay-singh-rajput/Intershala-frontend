import React, { useEffect } from 'react'
import navCss from '../App.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Nav = () => {

  const [isLogin, setIsLogin] = useState(Object)

  const checkLogin = async ()=>{
    try {
      const {data} = await axios.get("http://localhost:8080");
      return data;
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
  
    setIsLogin(checkLogin())
    console.log(isLogin);
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-indigo-400 py-3 fixed top-0 left-0 w-screen px-6 z-50">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Internshala</span>
  </div>

  <label className="lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-300 hover:text-white hover:border-white" htmlFor="menu-toggle"><svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
  <input className={`hidden ${navCss.menuToggle}`} type="checkbox"  />

  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${navCss.menu}`} >
    <div className="text-sm lg:flex-grow">
      <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
        Internships
      </span>
      <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
        Jobs
      </span>
      <span href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
        Blog
      </span>
    </div>
    <div className="flex gap-2">
      <Link
        to="/register" 
        className={`button ${navCss.buttonNina} px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden`} 
        data-text="Register"
      >
        <span className="align-middle">R</span>
        <span className="align-middle">e</span>
        <span className="align-middle">g</span>
        <span className="align-middle">i</span>
        <span className="align-middle">s</span>
        <span className="align-middle">t</span>
        <span className="align-middle">e</span>
        <span className="align-middle">r</span>
      </Link>
      <Link
        to="/login" 
        className={`button ${navCss.buttonNina} px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden`} 
        data-text="Log-In"
      >
        <span className="align-middle">L</span>
        <span className="align-middle">o</span>
        <span className="align-middle">g</span>
        <span className="align-middle">-</span>
        <span className="align-middle">I</span>
        <span className="align-middle">n</span>
      </Link>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav