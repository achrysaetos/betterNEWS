const { AuthenticationError, UserInputError } = require("apollo-server");

const User = require("../../models/User");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    async addKeyword(_, { userId, keyword }, context) {
      const user = checkAuth(context); // check if user is logged in
      if (keyword.trim() === "") {
        throw new Error("Keyword must not be empty");
      }
      const found_user = await User.findById(userId);
      if (found_user) {
        found_user.keywords.unshift({
          keyword,
          user: user.id,
          createdAt: new Date().toISOString(),
        });
        await found_user.save();
        return found_user;
      } else {
        throw new UserInputError("User not found");
      }
    },

    async removeKeyword(_, { userId, keyword }, context) {
      const user = checkAuth(context);
      const found_user = await User.findById(userId);
      if (found_user) {
        const keywordIndex = found_user.keywords.findIndex((kw) => kw.keyword === keyword);
        if (keywordIndex !== -1) found_user.keywords.splice(keywordIndex, 1);
        await found_user.save();
        return found_user;
      } else {
        throw new AuthenticationError("Action not allowed");
      }
    },
  },
};
