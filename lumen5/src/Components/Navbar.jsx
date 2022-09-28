import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"



const links = [
    {to:"/pricing", title:"Pricing"},
    {to:"/enterprices", title:"Enterprices"},
    {to:"/casestudies", title:"Case Studies"},
    {to:"/learn", title:"Learn"}
]

const Navbar = () => {
  return (
    <div
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
    }} 
    >
      {links.map((item) => (
        <NavLink 
        className = {({isActive}) => {
            return isActive ? styles.active : styles.default;
        }}
        key={item.to}
        to={item.to}
        >
            {item.title}
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
