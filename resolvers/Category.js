// if category is equal to the parent id - return the particular object in an array

const Category = {
  animals: (parent, args, { animals }) => {
    return animals.filter((animal) => {
      return animal.category === parent.id;
    });
    console.log(parent);
  },
};

module.exports = Category;
