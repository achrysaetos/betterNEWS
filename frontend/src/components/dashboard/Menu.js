import React from "react"
import { Link as aLink } from "react-router-dom"
import { Box, Accordion, AccordionItem, AccordionIcon, AccordionPanel, AccordionButton, Avatar, Flex, Link } from "@chakra-ui/react"

export default function Menu() {

  return(
    <Flex px={2} mx={8} maxW="200px" minW="200px" maxH="500px" minH="500px" borderWidth={1} boxShadow="sm" align="center" direction="column">
      <Avatar my={6} src="https://bit.ly/broken-link" size="xl"/>
      <Accordion defaultIndex={[0]} w="100%" allowToggle>
        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Dashboard </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2}> 
            <Link as={aLink} to="/"> My Sources </Link>
          </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> 
            <Link as={aLink} to="/myinterests"> My Interests </Link>
          </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Following </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Account </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2}> My Profile </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> My Messages </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> Settings </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Flex>
  )

}
