const keywordsResolvers = require("./keywords")
const usersResolvers = require("./users")

// restart the server after changing this file
module.exports = {
  Query: {
    ...usersResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...keywordsResolvers.Mutation
  }
}
