import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import React from 'react'

const TableData = () => {
  return (
    <Box>
    <Box w="70%" m="auto">
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

   </Box>
  )
}

export default TableData

