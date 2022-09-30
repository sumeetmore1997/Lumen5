import { Box, Image, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box w="100%" m="auto" mt="100px">

    <Box bgColor="#24282f" color="white" display="flex" pl="60px" pr="10px" pt="50px" pb="100px">
      <Box w="400px" pl="40px" pr="160px" textAlign="left">
        <Image w="140px" h="42px" src='https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png'/>
        <p style={{"marginTop":"30px"}}>Lumen5 combines powerful A.I. with a simple drag-and-drop interface to help you create professional video content in minutes.</p>
      </Box>
      <Box display="flex" m="auto" w="700px" justifyContent="space-evenly">
        <Box textAlign="left">
            <h3>EXPLORE</h3>
            <p style={{"marginTop":"20px"}}>About</p>
            <p style={{"marginTop":"15px"}}>Features</p>
            <p style={{"marginTop":"15px"}}>Careers</p>
            <p style={{"marginTop":"15px"}}>LinkedIn</p>
            <p style={{"marginTop":"15px"}}>Support</p>
            <p style={{"marginTop":"15px"}}>Product updates</p>
        </Box>
        <Box textAlign="left">
            <h3>VIDEO TOOLS</h3>
            <p style={{"marginTop":"20px"}}>Add Text to Video</p>
            <p style={{"marginTop":"15px"}}>Cut Video</p>
            <p style={{"marginTop":"15px"}}>Merge Video</p>
            <p style={{"marginTop":"15px"}}>Compress Video</p>
            <p style={{"marginTop":"15px"}}>Resize Video</p>
            <p style={{"marginTop":"15px"}}>See all</p>
        </Box>
        <Box textAlign="left">
            <h3>VIDEO CREATORS</h3>
            <p style={{"marginTop":"20px"}}>Video Editor</p>
            <p style={{"marginTop":"15px"}}>Photo Video Maker</p>
            <p style={{"marginTop":"15px"}}>Facebook Video Maker</p>
            <p style={{"marginTop":"15px"}}>YouTube Intro Maker</p>
            <p style={{"marginTop":"15px"}}>Instagram Video Maker</p>
            <p style={{"marginTop":"15px"}}>See all</p>
        </Box>
      </Box>
    </Box>
    <Box display="flex" justifyContent="space-between" p="15px" pr="80px" pl="80px" color="white" bgColor="#1b1b1b">
        <Box>Copyright © 2022 Lumen5</Box>
        <Box>
          <Link color='white'>Termss of Use</Link>&<Link color='white'>Privacy Policy</Link>
        </Box>
    </Box>

    </Box>
  )
}

export default Footer
