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
            <Link as={aLink} to="/" _hover={{ color: "teal.500" }}> My Sources </Link>
          </AccordionPanel>
          <AccordionPanel pb={4} ml={2}> 
            <Link as={aLink} to="/myinterests" _hover={{ color: "teal.500" }}> My Interests </Link>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton _focus="outline: 0">
            <Box flex="1" textAlign="left" fontWeight="bold"> Account </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} ml={2} _hover={{ color: "teal.500" }}> 
            <Link as={aLink} to="/" _hover={{ color: "teal.500" }}> Messages </Link>
          </AccordionPanel>
          <AccordionPanel pb={4} ml={2} _hover={{ color: "teal.500" }}> 
            <Link as={aLink} to="/" _hover={{ color: "teal.500" }}> Account </Link>
          </AccordionPanel>
          <AccordionPanel pb={4} ml={2} _hover={{ color: "teal.500" }}> 
            <Link as={aLink} to="/" _hover={{ color: "teal.500" }}> Settings </Link>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </Flex>
  )

}
