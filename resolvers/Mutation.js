const { v4 } = require("uuid");

const Mutation = {
  // extract out all args we need
  addAnimal: (
    parent,
    // args
    { image, title, rating, price, description, slug, stock, onSale, category },
    // ctx
    { animals }
  ) => {
    // generate new animal from the args provided
    let newAnimal = {
      id: v4(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };

    animals.push(newAnimal);

    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => {
      return animal.id === id;
    });

    animals.splice(index, 1);

    return true;
  },
};

module.exports = Mutation;

// type Animal {
//     id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     slug: String!
//     stock: Int!
//     # could be null (basically saying its optional to provide it)
//     onSale: Boolean
//     # animal can have one category
//     category: Category
//   }

// mutation {
//     addAnimal(
//       image: "alligator",
//       title: "alligator",
//       rating: 3.4,
//       price: "24,33",
//       description: ["sadss"],
//       slug: "alligator",
//       stock: 22,
//       onSale: true,
//       category: "2"
//     ) {
//       description
//     }
//   }

// mutation {
//   removeAnimal(id: "4")
// }

// {
//   animals {
//     image
//     id
//   }
// }
