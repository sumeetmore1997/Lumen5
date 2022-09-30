import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Pricing = () => {
  return (
    <Box>

      <Box w="70%" m="auto">
        <p style={{ "fontSize": "20px", "fontWeight": "400", "textAlign": "center", "marginLeft": "200px", "marginRight": "200px", "marginTop": "40px", "font-family": "Poppins,sans-serif" }}>
          PRICING</p>
        <p style={{ "fontSize": "35px", "fontWeight": "700", "textAlign": "center", "marginLeft": "200px", "marginRight": "200px", "font-family": "Poppins,sans-serif" }}>
          Plans for your video content creation strategy</p>
        <Button colorScheme='blue' borderRadius="100px" height="55px" mt="40px">Bill monthly</Button>
      </Box>

      <Box w="80%" display="flex" m="auto" mt="30px" justifyContent="space-between">
        <Box w="18%" h="360px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Community</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For casual video enthusiasts</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$0</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "15px" }}>forever free</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px">Get started</Button>
        </Box>
        <Box w="18%" h="360px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Basic</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For creating simple unbranded videos</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$19<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "15px" }}>per month, billed yearly</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px">Get started</Button>
        </Box>
        <Box w="18%" h="360px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Starter</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the individual content creator</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$59<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "15px" }}>per month, billed yearly</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px">Get started</Button>
        </Box>
        <Box w="18%" h="360px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Profesional</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the professional video storyteller</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$149<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "15px" }}>per month, billed yearly</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px">Get started</Button>
        </Box>
        <Box w="18%" h="360px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Enterprices</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the professional video storyteller</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Custom</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px">Learn more</Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Pricing
