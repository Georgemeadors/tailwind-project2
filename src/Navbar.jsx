import React from "react";


export default function Navbar() {
    return (
    <div>
     <nav id="header" className="w-full z-30 top-20 py-1 bg-gray-400 shadow-lg border-b border-blue-400 ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2 h-24">
         <label for="menu-toggle" className="cursor-pointer md:hidden block">
            <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input className="hidden" type="checkbox" id="menu-toggle"/>
         
         <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/">Home</a></li>
                  <li><a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="/button">Button</a></li>

               </ul>
            </nav>
         </div>
         
         <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div className="auth flex items-center w-full md:w-full">
               <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div>
    </div>
   </nav>
    
   
    </div>
  )
    
}