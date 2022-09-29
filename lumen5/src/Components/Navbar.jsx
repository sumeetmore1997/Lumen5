import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { Box, Button, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"



// const links = [
//     {to:"/", title:""},
//     {to:"/pricing", title:"Pricing"},
//     {to:"/enterprices", title:"Enterprices"},
//     {to:"/casestudies", title:"Case Studies"},
//     {to:"/learn", title:"Learn"}
// ]

const Navbar = () => {
  return (
    <Box
    style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%",
        margin: "auto",
    }} 
    >
      <Box>
       <NavLink to="/"><Image height="90px" width="150px" src='https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png'/></NavLink>
      </Box>
      <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "40%",
    }} 
      >
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/enterprices">Enterprices</NavLink>
        <NavLink to="/casestudies">Case Studies</NavLink> 
        <Menu>
          <MenuButton>Learn <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>Resources</MenuItem>
            <MenuItem>Blog</MenuItem>
          </MenuList>
        </Menu>

      {/* {links.map((item) => (
        <NavLink 
        className = {({isActive}) => {
            return isActive ? styles.active : styles.default;
        }}
        key={item.to}
        to={item.to}
        >
            {item.title}
        </NavLink>
      ))} */}
       <NavLink to="/login"><Button colorScheme='blue' variant='outline' borderRadius="100px" height="55px">Login</Button></NavLink>
       <NavLink to="/signup"><Button colorScheme='blue' borderRadius="100px" height="55px">Sign up</Button></NavLink>
      </Box>
    </Box>
  )
}

export default Navbar
