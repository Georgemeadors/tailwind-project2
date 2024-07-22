import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./Navbar.jsx"
import Button from "./Button.jsx"
import './App.css'


export default function App() {
  

  return (

    <Router>
    <div>
    <Navbar />
      {/* <nav className="mb-4">
        <Link to="/navbar" className="mr-4 text-blue-500">Navbar</Link>
        <Link to="/button" className="text-blue-500">Button</Link>
      </nav> */}
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/button" element={<Button />} />
        <Route path="/" element={
          <div className="text-center m-8">
            <h1 className="text-3xl font-bold underline bg-red-300 mb-4">Hello world!</h1>
            <p>This is the default landing page</p>
          </div>
        } />
      </Routes>
    </div>
  </Router>







    // <div>
    //   <Navbar/>
    //   <Button/>
      
    // </div>

  )
}

 
