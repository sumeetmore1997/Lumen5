import { Box, Button, Image, Text, Icon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
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
        <Box w="18%" h="370px" border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Community</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For casual video enthusiasts</p>
          <p style={{ "marginTop": "50px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$0</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "10px" }}>forever free</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px" mt="75px" variant='outline'>Get started</Button>
        </Box>
        <Box w="18%" h="370px" border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Basic</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For creating simple unbranded videos</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$19<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "10px" }}>per month, billed yearly</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px" mt="75px" variant='outline'>Get started</Button>
        </Box>
        <Box w="18%" h="370px" border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Starter</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the individual content creator</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$59<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "10px" }}>per month, billed yearly</p>
          <p style={{ "fontSize": "15px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "20px", "color":"blue" }}>Save 25%</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px" mt="35px" variant='outline'>Get started</Button>
        </Box>
        <Box w="18%" h="370px" border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Profesional</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the professional video storyteller</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>$149<sapn style={{"fontSize": "17px", "marginLeft":"4px"}}>USD</sapn></p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "10px" }}>per month, billed yearly</p>
          <p style={{ "fontSize": "15px", "textAlign": "start", "font-family": "Poppins,sans-serif", "marginTop": "20px", "color":"blue" }}>Save 25%</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px" mt="35px" variant='outline'>Get started</Button>
        </Box>
        <Box w="18%" h="370px" border="1px solid RGBA(0, 0, 0, 0.16)" borderRadius="8px" p="15px" textAlign="right">
          <p style={{ "marginTop": "30px", "fontSize": "20px", "fontWeight": "bold", "lineHeight": "30px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Enterprices</p>
          <p style={{ "fontSize": "14px", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>For the professional video storyteller</p>
          <p style={{ "marginTop": "30px", "fontSize": "30px", "fontWeight": "bold", "textAlign": "start", "font-family": "Poppins,sans-serif" }}>Custom</p>
          <Button colorScheme='blue' borderRadius="100px" height="45px" w="150px" mr="20px" mt="110px" variant='outline'>Learn more</Button>
        </Box>
      </Box>

      <Box w="80%" display="flex" m="auto" mt="30px" justifyContent="space-between">
        <Box w="18%" p="10px" textAlign="left">
          <p style={{"fontSize":"13px","fontWeight":"500","marginBottom":"5px"}}>What's included:</p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Unlimited videos</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Contains Lumen5 watermark</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>720p video resolution</span></p>
        </Box>
        <Box w="18%" p="10px" textAlign="left">
          <p style={{"fontSize":"13px","fontWeight":"500","marginBottom":"5px"}}>Everything in Free, plus:</p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>No Lumen5 branding</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Access to icons</span></p>
        </Box>
        <Box w="18%" p="10px" textAlign="left">
          <p style={{"fontSize":"13px","fontWeight":"500","marginBottom":"5px"}}>Everything in Basic, plus:</p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>50M stock photos & videos</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Custom colors & styles</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>1080p video resolution</span></p>
        </Box>
        <Box w="18%" p="10px" textAlign="left">
          <p style={{"fontSize":"13px","fontWeight":"500","marginBottom":"5px"}}>Everything in Starter, plus:</p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>500M stock photos & videos</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Custom watermarks</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Upload your own fonts</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Multiple saved templates</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Multiple brand kits</span></p>
        </Box>
        <Box w="18%" p="10px" textAlign="left">
          <p style={{"fontSize":"13px","fontWeight":"500","marginBottom":"5px"}}>Everything in Professional, plus:</p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Lumen5 design team</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Bespoke branded templates</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Dedicated customer success</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Teams & collaboration</span></p>
          <p><CheckIcon color="green" boxSize={3} ml="5px"/><span style={{"fontSize":"13px","marginLeft":"5px"}}>Enterprise-level security</span></p>
        </Box>
      </Box>

      <Box>
        <p style={{ "marginTop": "50px", "fontSize": "20px", "textAlign": "center", "font-family": "Poppins,sans-serif","marginBottom":"100px" }}>Over 10 million videos created across every industry</p>
        <Button colorScheme='blue' borderRadius="100px" height="55px" w="150px" mr="20px" variant='outline'>Get started</Button>
        <span style={{"fontWeight":"bold","fontSize":"20px","marginRight":"25px"}}>or</span>
        <span><Button colorScheme='blue' borderRadius="100px" height="55px" w="150px" mr="20px">Get started</Button></span>
      </Box>

    </Box>
  )
}

export default Pricing
