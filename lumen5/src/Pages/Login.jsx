import { Box, Button, Divider, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/users?page=1", {
      method: "POST"
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Login_Success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/");
      })
      .catch((err) => {});
  }
  return (
    <Box>
      
      <Box w="50%"m="auto" textAlign="left">
        <p style={{"fontSize":"40px", "fontWeight":"bold","marginBottom":"50px"}}>Welcome back!</p>
        <p style={{"fontSize":"16px"}}>WORK EMAIL</p>
        <Input variant='flushed' type="email" onChange={handleChange}/>
        <p style={{"fontSize":"16px","marginTop":"5px"}}>PASSWORD</p>
        <Input variant='flushed' type="password" onChange={handleChange}/>
        <Button mt="50px" colorScheme='blue' borderRadius="100px" height="55px" w="100%" onClick={handleSubmit} value="SUBMIT">Login</Button>
        <div style={{"display":"flex","marginTop":"40px"}}>
          <Box border="1px solid #dfdfdf"h="3px"bgColor="#dfdfdf" w="500px"></Box>
           <p style={{"marginTop":"-10px","paddingLeft":"10px","paddingRight":"10px"}}>OR</p>
          <Box border="1px solid #dfdfdf"h="3px"bgColor="#dfdfdf" w="500px"></Box>
        </div>
      </Box>

    </Box>
  )
}

export default Login
