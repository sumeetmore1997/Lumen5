import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CaseStudies = () => {
  return (
    <Box>

      <Box>

      </Box>
      
      <Box w="70%" margin="auto" mt="100px" border="1px solid" p="25px" alignItems="center" borderRadius="20px" color="white" bgColor="#5846f6">
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "textAlign":"center", "marginLeft":"200px","marginRight":"200px", "font-family": "Poppins,sans-serif"}}>
            Join over 1,000,000 companies using Lumen5 to tell their stories.
            </p>
            <p style={{"fontSize":"22px", "fontWeight":"400", "lineHeight":"30px", "textAlign":"center", "marginLeft":"200px","marginRight":"200px", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.
            </p>
            </div>
            <br/>
            <NavLink to="/signup"><Button color='blue' borderRadius="100px" height="55px" bgColor="white">Sign up free</Button></NavLink>
        </Box>

    </Box>
  )
}

export default CaseStudies
