import React, { useState, useEffect } from "react"
import { Link, Box, Heading, Flex } from "@chakra-ui/react"

import Menu from "./dashboard/Menu"
import Footer from "./dashboard/Footer"

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080");
      const data = await response.json();
      setData(data.slice(0, 20))
      setLoading(false);
    };
    fetchData();
  }, []);

  return loading ? "" : (
    <Flex justifyContent="flex-start">
      <Menu />
      <Box width="100%">
        <Box>
          <Heading fontSize="3xl" color="teal.500" textAlign="center" pb={2}>My Sources</Heading>
          <Heading fontSize="xl" color="teal.500" textTransform="uppercase" py={2}>Hacker News</Heading>
          {data.map((article) => {
            return (
              <Box key={article.title} width="80%" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                <Link fontSize="lg" color="black" href={article.href} _hover={{ color: "teal.500" }}>
                    {article.title}
                </Link>
              </Box>
            )
          })}
        </Box>
        <Footer />
      </Box>
    </Flex>
  )
  
}
