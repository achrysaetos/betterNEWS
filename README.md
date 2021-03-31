# betterNEWS

One place for all the news you follow. Built with Node, MongoDB, React, ChakraUI, and GraphQL.

Integrates with Puppeteer to **scrape general news headlines** from any current site (currently scraping Hacker News and Tech Crunch, as examples).

Integrates with News API to **crawl for specific topics** from the web (enter your interests by keyword, and we'll find any current mentions of it on the web).

*Don't forget to add your database url and api keys in `config.js`.*

**TO LAUNCH THE SITE:**
1. run `yarn start` in the backend directory -- connects to the MongoDB database and the Express API endpoint, and runs the spiders to scrape for headlines from any sites listed in `apify_startup.js`.
2. run `yarn start` in the frontend directory.
3. Go to http://localhost:3000. Your Express API endpoint is up at localhost:8080, and your GraphQL playground is up at localhost:5000.

**Eventually, we will be able to automate scraping across any number of sites.**

**Final Notes:**
* New topics will appeal to users arbitrarily as a sign of the times.
* And secondly, numerous news sources have already invested millions of dollars in terrific vetting algorithms.
* *This is why we cannot do an ordinary, general news app.*

## Important directories

**backend/** -- set up your database, create the rules for queries and mutations, and authorize the user

**frontend/** -- set up the client interface and connect to your backend, handle verification of users and create pages and their components, and write queries/mutations, helper functions, and styles for the parts of your app
