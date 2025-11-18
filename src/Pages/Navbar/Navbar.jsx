import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className='navbar'>
    <NavLink to="/">
    <BiHome/>
    </NavLink>
    <NavLink to="/About">
         <AiOutlineUser /> 
    </NavLink>
    <NavLink to="/Products">
    <MdOutlineProductionQuantityLimits />
    </NavLink>
    <NavLink to="/Todos">
        Todos
    </NavLink>
    <NavLink to="/Search">
        <FaSearch />
    </NavLink>
    </nav>
  )
}

export default Navbar
