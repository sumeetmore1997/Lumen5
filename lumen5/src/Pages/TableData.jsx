import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TableData = () => {
  return (
    <Box>

      <Box w="70%" m="auto">
      <p style={{ "marginTop": "50px", "fontSize": "30px", "textAlign": "center", "font-family": "Poppins,sans-serif" }}>Choose the plan that's right for you</p>
      <Box display="flex" m="auto" mt="30px" flexDirection="row-reverse" mb="20px">
       <Box mr="90px">
          <p style={{"fontSize":"22px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Enterprise</p>
          <p style={{"fontSize":"13px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Let's talk!</p>
          <Button textAlign="center" colorScheme='blue' borderRadius="100px"  height="40px" w="120px" mt="15px" mr="20px" variant='outline'>Learn more</Button>
        </Box>
        <Box>
          <p style={{"fontSize":"22px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Professional</p>
          <p style={{"fontSize":"13px","font-family": "Poppins,sans-serif","textAlign": "center",}}>$199 USD/month</p>
          <Button colorScheme='blue' borderRadius="100px"  height="40px" w="120px" mt="15px" mr="20px" variant='solid'>Get started</Button>
        </Box>
        <Box>
          <p style={{"fontSize":"22px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Starter</p>
          <p style={{"fontSize":"13px","font-family": "Poppins,sans-serif","textAlign": "center",}}>$79 USD/month</p>
          <Button colorScheme='blue' borderRadius="100px"  height="40px" w="120px" mt="15px" mr="20px" variant='outline'>Get started</Button>
        </Box>
        <Box>
          <p style={{"fontSize":"22px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Basic</p>
          <p style={{"fontSize":"13px","font-family": "Poppins,sans-serif","textAlign": "center",}}>$29 USD/month</p>
          <Button colorScheme='blue' borderRadius="100px"  height="40px" w="120px" mt="15px" mr="20px" variant='outline'>Get started</Button>
        </Box>
        <Box>
          <p style={{"fontSize":"22px","font-family": "Poppins,sans-serif","textAlign": "center",}}>Community</p>
          <p style={{"fontSize":"13px","font-family": "Poppins,sans-serif","textAlign": "center",}}>forever free</p>
          <Button colorScheme='blue' borderRadius="100px" height="40px" w="120px" mt="15px"mr="20px" variant='outline'>Get started</Button>
        </Box>
      </Box>
      <Box border="1px solid #dfdfdf"h="3px"bgColor="#dfdfdf"></Box>
      </Box>
      
    <Box w="70%" m="auto" mt="50px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Usage</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td>Videos per month</Td>
              <Td>Unlimited</Td>
              <Td>Unlimited</Td>
              <Td>Unlimited</Td>
              <Td>Unlimited</Td>
              <Td>Unlimited</Td>
            </Tr>
            <Tr>
              <Td>Saved templates</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>3</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Workspaces</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>3</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Instant videos</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>10</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Team members</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Brand kits</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Td>1</Td>
              <Td>3</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Translations</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto" mt="60px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Rendering</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td>Resolution</Td>
              <Td>720p</Td>
              <Td>720p</Td>
              <Td>1080p</Td>
              <Td>1080p</Td>
              <Td>1080p</Td>
            </Tr>
            <Tr>
              <Td>Landscape</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Square</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Vertical</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto" mt="60px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Branding</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td w="225px">Branded outro</Td>
              <Td alignItems="center"><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Popular templates</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Custom outro</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Custom fonts</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Custom colors</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Watermark upload</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Upload your own fonts</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Custom templates</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto" mt="60px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Media</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td w="30px">Millions of free-to-use videos <br/> and images</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Upload your own videos & <br/>photos</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Upload your own audio tracks</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Unlimited premium media</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Exclusive media marketplace</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td>25/month</Td>
              <Td>Custom</Td>
            </Tr>
            <Tr>
              <Td>Record your own voiceover</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Icons</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Upload your own custom icons</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto" mt="60px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Team management</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td w="270px">Brand management</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Team permissions</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Workspace management</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Two-factor authentication</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Single sign-on</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto" mt="60px">
      <p style={{"textAlign":"left","fontSize":"18px","fontWeight":"700","marginLeft":"25px","font-family": "Poppins,sans-serif","marginBottom":"10px"}}>Support</p>
      <TableContainer>
        <Table variant='unstyled'>
          <Tbody>
            <Tr>
              <Td w="270px">Help center access</Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Email support</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Customized support</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
            <Tr>
              <Td>Invoiced billing</Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><MinusIcon boxSize={3}/></Td>
              <Td><CheckIcon color="green" boxSize={4}/></Td>
            </Tr>
          </Tbody>
        </Table>
    </TableContainer>
   </Box>

   <Box w="70%" m="auto">
    <p style={{ "marginTop": "50px", "fontSize": "27px", "fontWeight":"lighter", "textAlign": "center", "font-family": "Poppins,sans-serif","marginBottom":"50px" }}>A few frequently asked questions</p>
    <Box display="flex" justifyContent="space-around">
      <Box>
        <p style={{ "fontSize": "20px", "textAlign": "left", "font-family": "Poppins,sans-serif" }}>What if I only need Lumen5 for a set amount of time?</p>
        <p style={{ "fontSize": "14px", "textAlign": "left", "font-family": "Poppins,sans-serif","marginTop":"10px" }}>That's fine! You can cancel your account anytime.</p>
      </Box>
      <Box>
        <p style={{ "fontSize": "20px", "textAlign": "left", "font-family": "Poppins,sans-serif" }}>What happens to my videos if I cancel?</p>
        <p style={{ "fontSize": "14px", "textAlign": "left", "font-family": "Poppins,sans-serif","marginTop":"10px" }}>All the videos you create are yours to keep forever and ever.</p>
      </Box>
    </Box>
    <Box mt="60px" display="flex" justifyContent="space-between">
      <Box w="500px"ml="50px">
        <p style={{ "fontSize": "20px", "textAlign": "left", "font-family": "Poppins,sans-serif" }}>Do you have a non-profit discount?</p>
        <p style={{ "fontSize": "14px", "textAlign": "left", "font-family": "Poppins,sans-serif","marginTop":"10px" }}>We do. Contact us for more information.</p>
      </Box>
      <Box w="600px"ml="220px">
        <p style={{ "fontSize": "20px", "textAlign": "left", "font-family": "Poppins,sans-serif" }}>How do I pay for my plan?</p>
        <p style={{ "fontSize": "14px", "textAlign": "left", "font-family": "Poppins,sans-serif","marginTop":"10px" }}>You can pay with Visa, Mastercard, and American Express. All prices are in USD. Invoiced billing is available on the Enterprise plan.</p>
      </Box>
    </Box>
   </Box>

   </Box>
  )
}

export default TableData

