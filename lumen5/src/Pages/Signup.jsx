import { Box, Button, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Signup = () => {
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
    fetch("https://reqres.in/api/users?page=2", {
      method: "POST"
      // headers: {
      //   "Content-Type": "application/json"
      // }
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Account Created Successfully");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/login");
      })
      .catch((err) => {});
  }
  return (
    <Box>

      <Box w="50%"m="auto" textAlign="left">
        <p style={{"fontSize":"40px", "fontWeight":"bold","marginBottom":"50px"}}>Get started with a free account</p>
        <p style={{"fontSize":"16px"}}>FULL NAME</p>
        <Input variant='flushed' type="text" />
        <p style={{"fontSize":"16px"}}>WORK EMAIL</p>
        <Input variant='flushed' type="email" onChange={handleChange}/>
        <p style={{"fontSize":"16px","marginTop":"5px"}}>PASSWORD</p>
        <Input variant='flushed' type="password" onChange={handleChange}/>
        <Button mt="50px" colorScheme='blue' borderRadius="100px" height="55px" w="100%" onClick={handleSubmit} value="SUBMIT">Create account</Button>
        <div style={{"display":"flex","marginTop":"40px"}}>
          <Box border="1px solid #dfdfdf"h="3px"bgColor="#dfdfdf" w="500px"></Box>
           <p style={{"marginTop":"-10px","paddingLeft":"10px","paddingRight":"10px"}}>OR</p>
          <Box border="1px solid #dfdfdf"h="3px"bgColor="#dfdfdf" w="500px"></Box>
        </div>
      </Box>

    </Box>
  )
}

export default Signup
