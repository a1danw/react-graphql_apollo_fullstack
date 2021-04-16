const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Animal = require("./resolvers/Animal");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/Mutation");
require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category,
  },
  // context is a centralized store - we can put all the data in the store and
  // every resolver will have access to whatever we put inside the context
  // so we dont have to import the data to each file we need it - just destrucutre the below data in the resolvers
  context: {
    mainCards,
    animals,
    categories,
  },
  introspection: true,
  playground: true,
});

// // The `listen` method launches a web server.
server
  .listen({ port: parseInt(process.env.PORT || 4000, 10) })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });

// // we can leave the query off at the start which will be an implied query
// // {
// //   category(slug: "mammals") {
// //     category
// //   }
// // }

// // Category query
// // Query for the cats category and get back the type of animals in it
// // {
// //   category(slug: "cats") {
// //     category
// //     animals {
// //       slug
// //       title
// //       image
// //     }
// //   }
// // }

// // {
// //   categories {
// //     category
// //     animals {
// //       title
// //     }
// //   }
// // }

// // {
// //   animals {
// //     category {
// //       category
// //     }
// //   }
// // }
