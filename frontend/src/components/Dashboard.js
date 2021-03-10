import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Link, Box, Heading, HStack, Flex } from "@chakra-ui/react"

import { AuthContext } from "../context/auth"
import { FETCH_USER_QUERY } from "../graphql/FETCH_USER_QUERY"
import Menu from "./dashboard/Menu"
import Footer from "./dashboard/Footer"

export default function Home() {
  const data = require('../scraper/apify_storage/headlines.json');

  return (
    <Flex justifyContent="flex-start">
      <Menu />
      <Box>
        <Heading fontSize="xl" color="teal.500" mb={2}>Hacker News Headlines</Heading>
        {data.map((headline) => {
          return (
            <Box key={headline.title}>
              <Link fontSize="lg" color="black" href={headline.href} _hover={{ color: "teal.500" }}>
                {headline.title}
              </Link>
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
  
}
