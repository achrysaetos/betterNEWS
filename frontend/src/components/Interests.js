import React, { useState, useEffect, useRef } from "react"
import { Link, Box, Heading, Flex, Tooltip, Text } from "@chakra-ui/react"

import Menu from "./dashboard/Menu"
import Footer from "./dashboard/Footer"

export default function Interests({ links, terms }) {
  const headlines = useRef(null) // bypasses promises in useEffect hook
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const arr = []
    const fetchData = async () => {
      for (let i = 0; i < links.length; i++){
        const response = await fetch(links[i]);
        const data = await response.json();
        data.term = terms[i]
        arr.push(data)
        if (arr.length === links.length) setLoading(false);
      }
    };
    fetchData();
    headlines.current = arr
  }, [links, terms]);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  // adding/removing terms doesn't require a refresh to display the currently following keywords, but does require a refresh
  // to display the new headlines because the app needs to make new calls to the News API
  return loading ? "" : (
    <Flex justifyContent="flex-start">
      <Menu />
      <Box w="auto">
        <Heading fontSize="3xl" color="teal.500" textAlign="center" pb={2}>My Interests</Heading>
        <Text as="em">Currently following: {terms.join(", ")}</Text>
        {shuffle(headlines.current).map((group) => 
          <Box key={group.term}>
            {group.articles.length > 0 ? 
              <Heading fontSize="xl" color="teal.500" textTransform="uppercase" py={2}>{group.term}</Heading> : ""
            }
            {group.articles.map((article) => {
              return (
                <Box key={article.title}>
                  <Link fontSize="lg" color="black" href={article.url} _hover={{ color: "teal.500" }}>
                    <Tooltip label={article.description} placement="left">
                      {article.title}
                    </Tooltip>
                  </Link>
                </Box>
              )
            })}
          </Box>
        )}
        <Footer />
      </Box>
    </Flex>
  )
  
}
