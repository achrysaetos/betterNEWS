import React, { useState, useEffect, useRef } from "react"
import { Link, Box, Heading, Flex, Tooltip } from "@chakra-ui/react"

import Menu from "./dashboard/Menu"
import Footer from "./dashboard/Footer"

export default function Home({ links, terms }) {
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

  function MouseOver(event) {
    event.target.style.color = "red";
    event.target.innerText = "(-) " + event.target.innerText;
  }
  function MouseOut(event){
    event.target.style.color = "";
    event.target.innerText = event.target.innerText.substring(4);
  }

  return loading ? "" : (
    <Flex justifyContent="flex-start">
      <Menu />
      <Box>
        {headlines.current.map((group) => 
          <Box key={group.term}>
            {group.articles.length > 0 ? 
              <Heading fontSize="xl" color="teal.500" textTransform="uppercase" py={2} _hover={{ cursor: "pointer" }}>
                <span onMouseOver={MouseOver} onMouseOut={MouseOut}>{group.term}</span>
              </Heading> : ""
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
