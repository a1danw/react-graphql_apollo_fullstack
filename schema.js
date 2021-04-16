const { ApolloServer, gql } = require("apollo-server");

// Scalar types - String, Float, Int, Boolean
// Interface - Referring to another type
// Type defs describe how the data should look like
// [String! <== inside the array it cannot be nullable has to be strings]! <== must be an array
const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    # could be null (basically saying its optional to provide it)
    onSale: Boolean
    # animal can have one category
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    # category can have multiple animals
    animals: [Animal!]!
  }

  # what we expect back
  # resolver runs when we query in graphiql
  type Query {
    mainCards: [MainCard]
    animals: [Animal]
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category
  }

  # returns an animal
  # we ask the user to provide these fields
  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      slug: String!
      stock: Int!
      # could be null (basically saying its optional to provide it)
      onSale: Boolean
      # animal can have one category
      category: String!
    ): Animal
    removeAnimal(id: ID!): Boolean!
    # updateAnimal(
    #   image: String
    #   title: String
    #   rating: Float
    #   price: String
    #   description: [String!]
    #   slug: String
    #   stock: Int
    #   onSale: Boolean
    #   category: String
    # ): Animal
  }
`;

module.exports = typeDefs;
