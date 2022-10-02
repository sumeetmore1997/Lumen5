import { AspectRatio, Box, Button, Divider, Grid, GridItem, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Enterprices = () => {
  return (
    <Box>

      <Box bgColor="#24282f" color="white" pt="30px" pb="50px">
      <Box display="flex" width="70%" margin="auto" mt="30px" >
        <Box>
            <div>
            <p style={{"fontSize":"20px","textAlign":"left","marginLeft":"40px", "marginBottom":"20px"}}>ENTERPRICES</p>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"100px", "paddingLeft":"40px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            We help global brands unlock the potential of video marketing
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"150px", "paddingLeft":"40px", "textAlign":"left", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Drive brand awareness and smash through MQL targets by enabling your team to create engaging videos at scale.
            </p>
            </div>
            <br/>
            <br/>
            <NavLink to="/signup"><Button colorScheme='blue' borderRadius="100px" height="55px" marginRight="320px">Request a demo</Button></NavLink>
        </Box>
        <Box>
            <Image height="400px" width="1300px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png"/>
        </Box>
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
                <Image w="1300px" h="500px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png"/>
            </Box>
            <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://www.iconbunny.com/icons/media/catalog/product/2/3/2355.9-offices-icon-iconbunny.jpg'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"100px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Create content on budget and on time by bringing video in-house
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"140px", "textAlign":"left", "marginBottom":"25px", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Rather than waiting for capacity to open up, Lumen5 enables anyone on your team to create their own videos on demand.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="325px">Request a demo</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"140px"}}>“With an agency, the turnaround time is usually one week. But with Lumen5, it’s cut down from weeks to hours.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Michelle Hsiao</p>
            <p style={{"textAlign":"start"}}>Visual Content Director</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png'/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px" display="flex">
        <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://www.iconbunny.com/icons/media/catalog/product/1/4/1464.9-two-chat-bubbles-icon-iconbunny.jpg'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"80px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Repurpose content across multiple regions for global audiences
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"100px", "marginBottom":"25px", "textAlign":"left", "marginTop":"40px", "font-family": "Poppins,sans-serif"}}>
            Lumen5 is built for multilingual content creation and equipped with translation tools to help you scale across global markets.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="310px">Request a demo</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"120px"}}>“Our team is international and we’re able to create Lumen5 videos for global that need to be regionalized into different languages.”</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Eric Chu</p>
            <p style={{"textAlign":"start"}}>Social and Digital Content Manager</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png'/>
            </Box>
            <Box m="auto">
                <Image w="1200px" h="400px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-support.png"/>
            </Box>
        </Box>

        <Box w="70%" margin="auto" mt="100px" display="flex">
            <Box m="auto">
                <Image w="1400px" h="450px" src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-control.png"/>
            </Box>
            <Box paddingLeft="100px">
                <Image w="80px" h="80px" marginBottom="20px" src='https://conceptdraw.com/a155c4/p111/preview/640/pict--lock-cloud-round-icons-vector-stencils-library'/>
            <div>
            <p style={{"fontSize":"35px", "fontWeight":"700", "lineHeight":"45px", "padding-right":"20px", "textAlign":"left", "font-family": "Poppins,sans-serif"}}>
            Maintain full brand control with a bespoke video template
            </p>
            <p style={{"fontSize":"23px", "fontWeight":"400", "lineHeight":"30px", "padding-right":"140px", "textAlign":"left", "marginTop":"40px", "marginBottom":"25px","font-family": "Poppins,sans-serif"}}>
            We work with your brand team to handcraft a unique custom template following the exact details of your brand guidelines.
            </p>
            </div>
            <NavLink to="/signup"><Link color='blue' mt="30px" mr="305px">Request a demo</Link></NavLink>
            <Divider marginTop="30px" marginRight="250px"/>
            <div style={{"paddingLeft":"0px", "marginTop":"50px"}}>
            <p style={{ "textAlign":"start", "paddingRight":"135px"}}>“We make sure that the social content we create aligns to brand guidelines, and Lumen5 makes it easy for us to enhance the look and feel of our content promotion.</p>
            <p style={{"fontWeight":"700", "marginTop":"20px", "textAlign":"start"}}>Eric Chu</p>
            <p style={{"textAlign":"start"}}>Social and Digital Content Manager</p>
            </div>
            <Image src='https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png'/>
            </Box>
        </Box>

        <Box m="auto" w="70%" >
            <p style={{"margin":"auto","fontSize":"40px","font-family": "Poppins,sans-serif","marginTop":"50px"}}>Bespoke custom templates</p>
            <p style={{"margin":"auto","fontSize":"25px","font-family": "Poppins,sans-serif","marginTop":"5px", "marginBottom":"50px"}}>We work with your brand team every step of the way</p>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <GridItem><AspectRatio mt="30px" m="auto" maxW='400px' ratio={16/9}>
            <iframe
                title='simens'
                src='https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4'
                allowFullScreen
            />
        </AspectRatio>
        </GridItem>
        <GridItem><AspectRatio mt="30px" m="auto" maxW='400px' ratio={16/9}>
            <iframe
                title='saleforce'
                src='https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4'
                allowFullScreen
            />
        </AspectRatio>
        </GridItem>
        <GridItem><AspectRatio m="auto" mt="30px" maxW='400px' ratio={16/9}>
            <iframe
                title='simens'
                src='https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4'
                allowFullScreen
            />
        </AspectRatio></GridItem>
        <GridItem><AspectRatio m="auto" mt="30px" maxW='400px' ratio={16/9}>
            <iframe
                title='saleforce'
                src='https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4'
                allowFullScreen
            />
        </AspectRatio></GridItem>
        </Grid>
        </Box>


        <Box w="70%" margin="auto" mt="100px">
            <p style={{"fontSize":"35px", "fontWeight":"700", "textAlign":"center", "font-family": "Poppins,sans-serif","width":"550px", "margin":"auto", "lineHeight":"45px"}}>Tips and tricks for effortless video production</p>
            <p style={{"fontSize":"22px", "fontWeight":"300", "textAlign":"center", "font-family": "Poppins,sans-serif","width":"450px", "margin":"auto", "marginTop":"20px"}}>Learn how our customers save time and boost engagement with Lumen5</p>
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

        <Box mb="50px" w="70%" margin="auto" mt="100px" border="1px solid" p="25px" alignItems="center" borderRadius="20px" color="white" bgColor="#5846f6">
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

export default Enterprices
