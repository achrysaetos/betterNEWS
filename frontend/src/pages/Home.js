import React, { useContext } from "react"
import { useQuery } from "@apollo/react-hooks"
import moment from "moment"

import { AuthContext } from "../context/auth"
import { FETCH_USER_QUERY } from "../graphql/FETCH_USER_QUERY"
import Dashboard from "../components/Dashboard"

export default function Home() {
  const { user } = useContext(AuthContext)
  const { loading, data } = useQuery(FETCH_USER_QUERY, { variables: { userId: user.id }})

  if (loading) {
    return ""
  } else {
    const links = []
    const terms = []
    for (let i = 0; i < data?.getUser.keywords.length; i++){
      const term = data?.getUser.keywords[i].keyword
      const weekago = moment(Date.now() - 7 * 24 * 3600 * 1000).format('YYYY-MM-DD')
      const api_key = "ccd72be329bc4978907b2e228580c227"
      const link = `https://newsapi.org/v2/everything?language=en&qInTitle="${term}"
      &pageSize=5&sortBy=popularity&from=${weekago}&apiKey=${api_key}`
      links.push(link)
      terms.push(term)
    }
    
    return user ? <Dashboard links={links} terms={terms} /> : ""
  }
  
}
