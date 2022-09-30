
import { Box, Button, Divider, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"140px", "textAlign":"left", "marginBottom":"25px", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Creating with Lumen5 is just like making a presentation. Point and click, drag and drop, done and done.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="325px">Get started for free</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"140px"}}>“One of our colleagues called Lumen5 the PowerPoint of video making. Everybody can use PowerPoint; it’s easy.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Michelle Hsiao</p>
            <p style={{"textAlign":"start"}}>Visual Content Director</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px" display="flex">
        <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://fscinteractive.com/wp-content/uploads/2018/05/FSC_Icon_DynamicCreative_Background.png'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"80px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            A.I. built to repurpose marketing content
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"100px", "marginBottom":"25px", "textAlign":"left", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Automatically turn blog posts into videos or transform zoom recordings into captivating clips.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="310px">Get started for free</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"120px"}}>“It's the best content creator I've ever used. It takes me 10-15 minutes to create a video.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Gareth Lloyd</p>
            <p style={{"textAlign":"start"}}>Social Media Marketing Manager</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png'/>
            </Box>
            <Box m="auto">
                <Image w="1200px" h="400px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-media.png"/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px" display="flex">
            <Box m="auto">
                <Image w="1400px" h="450px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png"/>
            </Box>
            <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://previews.123rf.com/images/asmati/asmati1610/asmati161000168/63405501-palette-and-paint-brush-sign-white-icon-on-red-circle-.jpg'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"20px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Templates designed to help you stay on brand, on budget, and on time
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"140px", "textAlign":"left", "marginTop":"40px", "marginBottom":"25px","font-family": "Poppins,sans-serif"}}>
            Tap into hundreds of customizable designs made to help you communicate effectively and consistently.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="305px">Get started for free</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"135px"}}>“Lumen5 provides a great library of images, video footage, and music to deliver the energy and traction you need for your social posts.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Shirley Pang</p>
            <p style={{"textAlign":"start"}}>Global Social Media Manager</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png'/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px">
            <p style={{"fontSize":"35px", "fontWeight":"700", "textAlign":"center", "font-family": "Poppins,sans-serif"}}>Learning resources for video marketing</p>
            <Box w="70%" display="flex" m="auto" mt="30px" justifyContent="space-between">
                <Box w="30%" h="320px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="10px" textAlign="right">
                    <Image src='https://storage.googleapis.com/lumen5-site-images/l5-blog.png'/>
                    <p style={{ "marginTop":"30px","fontSize":"22px", "fontWeight":"50", "lineHeight":"30px", "textAlign":"start", "font-family": "Poppins,sans-serif"}}>Read all about marketing in the Lumen5 Blog</p>
                    <Link color='blue' pr="20px">Let's go</Link>
                </Box>
                <Box w="30%"  h="320px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="10px" textAlign="right">
                    <Image src='https://storage.googleapis.com/lumen5-site-images/l5-podcast.png'/>
                    <p style={{ "marginTop":"30px","fontSize":"22px", "fontWeight":"100", "lineHeight":"30px", "textAlign":"start", "font-family": "Poppins,sans-serif"}}>Tune into the Supercharge Marketing Podcast</p>
                    <Link color='blue' mt="15px" pr="20px">Let's go</Link>
                </Box>
                <Box w="30%"  h="320px" border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p="10px" textAlign="right">
                    <Image src='https://storage.googleapis.com/lumen5-site-images/l5-video.png'/>
                    <p style={{ "marginTop":"30px","fontSize":"22px", "fontWeight":"100", "lineHeight":"30px", "textAlign":"start", "font-family": "Poppins,sans-serif"}}>Watch and learn from our Lumen5 Video Series</p>
                    <Link color='blue' mt="15px" pr="20px">Let's go</Link>
                </Box>
            </Box>
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

export default Home
