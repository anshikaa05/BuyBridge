import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Search from './Pages/Search/Search';
import Products from './Pages/Products'
import About from './Pages/About'

function App() {
  

  return (
    <>
    <div className="flex min-h-screen">
        <Navbar />
      <div className="flex-1 flex flex-col">
      
        <main className="flex-1 bg-slate-50 dark:bg-gray-900"></main>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </div>
      </div>
    </>
  )
}

export default App
