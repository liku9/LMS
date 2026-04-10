import React from 'react'
import Layout from './pages/Layout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='h-screen w-screen  text-center'>  
    <ToastContainer position="top-right" autoClose={2000} />
      <Layout/>
    </div>
  )
}

export default App