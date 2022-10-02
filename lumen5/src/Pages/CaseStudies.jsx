import { Box, Button, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CaseStudies = () => {
  return (
    <Box>

      <Box w="70%" m="auto">
        <p style={{"margin":"auto","fontSize":"40px","marginTop":"80px","marginBottom":"50px","font-family": "Poppins,sans-serif"}}>Case Studies & Customer Stories</p>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} textAlign="left">
        <GridItem>
          <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/6qQh4D8FV5Tldbgr1D2XOc/278756ab5351d4952fe7ce26d72a7f3c/cms1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>CMS Law</p>
          <p>How Lumen5 is helping CMS get in front of their audience and reach their video marketing goals</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/1PZVc3Lm5w8CdYIROtKYdQ/024aa5c270749e239a4603207f10667d/ncstate1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>NC State University</p>
          <p>How Lumen5 is helping NC State University boost their online presence and drive more traffic</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/sHpNEfrQNeXZZPBN9SqAY/8a7485933bddc3ab99d832342f9b794f/taxevity1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>Berkshire Hathaway</p>
          <p>How Berkshire Hathaway HomeServices created 500 videos in 10 months</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/4CEMG9nD5szpcNtznePJWx/57c08b81180c494eed8c0021ce72924a/mondadori1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>Mondadori</p>
          <p>Learn how Mondadori doubled social media engagement and tripled their video views with Lumen5.</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/6qQh4D8FV5Tldbgr1D2XOc/278756ab5351d4952fe7ce26d72a7f3c/cms1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>CMS Law</p>
          <p>How Lumen5 is helping CMS get in front of their audience and reach their video marketing goals</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/1PZVc3Lm5w8CdYIROtKYdQ/024aa5c270749e239a4603207f10667d/ncstate1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>NC State University</p>
          <p>How Lumen5 is helping NC State University boost their online presence and drive more traffic</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/sHpNEfrQNeXZZPBN9SqAY/8a7485933bddc3ab99d832342f9b794f/taxevity1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>Taxevity</p>
          <p>How Lumen5 is helping Taxevity with brand consistency</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/1vY85VxpSTeHf5v8JHpGTj/9324f772f8a894e54243862414863c7f/mitsubishi1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>Mitsubishi</p>
          <p>How Lumen5 is helping MHI expand their content strategy and speed up their workflow</p>
        </GridItem>
        <GridItem>
        <Image borderRadius="20px" src='https://images.ctfassets.net/5ltrds677kah/7IVEpPjwhpbvaW9GLk9okQ/457f4058deb29b711941ef66dfcff7e6/dnv1.png?w=400'/>
          <p style={{"fontSize":"16px","fontWeight":"bold","marginTop":"10px"}}>DNV</p>
          <p>How Lumen5 helped DNV GL level up their social media game</p>
        </GridItem>
      </Grid>
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
