
import { Box, Button, Divider, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <Box>

        <Box display="flex" width="70%" margin="auto" mt="30px">
        <Box>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"170px", "paddingLeft":"40px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Grow your brand and drive demand with video at scale
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"170px", "paddingLeft":"40px", "textAlign":"left", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Our online video creator makes it easy for anyone on your team to create engaging video content in minutes.
            </p>
            </div>
            <br/>
            <br/>
            <NavLink to="/signup"><Button colorScheme='blue' borderRadius="100px" height="55px" marginRight="320px">Sign up free</Button></NavLink>
        </Box>
        <Box>
            <Image height="600px" width="1400px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png"/>
        </Box>
        </Box>

        <Box mt="100px">
            <p style={{"fontSize":"23px", "fontWeight":"400", "font-family": "Poppins,sans-serif", "marginBottom":"20px"}}>Over 10 million videos created across every industry</p>
            <Box display="flex" margin="auto" w="75%" justifyContent="space-between">
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png"/>
                <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png"/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px" display="flex">
            <Box m="auto">
                <Image w="1300px" h="500px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"/>
            </Box>
            <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/1/3146.9-documents-icon-iconbunny.jpg'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"100px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Easier than building a slide deck
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"140px", "textAlign":"left", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Creating with Lumen5 is just like making a presentation. Point and click, drag and drop, done and done.
            </p>
            </div>
            <Divider marginTop="50px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"140px"}}>“One of our colleagues called Lumen5 the PowerPoint of video making. Everybody can use PowerPoint; it’s easy.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Michelle Hsiao</p>
            <p style={{"textAlign":"start"}}>Visual Content Director</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'/>
            </Box>
        </Box>
    </Box>
  )
}

export default Home
