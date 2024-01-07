import React from 'react'
import navCss from '../App.module.css'

const Nav = () => {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Internshala</span>
  </div>

  <label className="block lg:hidden cursor-pointer flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" htmlFor="menu-toggle"><svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></label>
  <input className={`hidden ${navCss.menuToggle}`} type="checkbox"  />

  <div className={`hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto ${navCss.menu}`} >
    <div className="text-sm lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div className="flex gap-2">
      {/* <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">Log-In</a> */}
      <a
        href="!" 
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
      </a>
      <a
        href="!" 
        className={`button ${navCss.buttonNina} px-5 py-0 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest overflow-hidden`} 
        data-text="Log-In"
      >
        <span className="align-middle">L</span>
        <span className="align-middle">o</span>
        <span className="align-middle">g</span>
        <span className="align-middle">-</span>
        <span className="align-middle">I</span>
        <span className="align-middle">n</span>
      </a>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav