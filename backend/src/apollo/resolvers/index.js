const authors = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Sashko' },
  { id: 3, name: 'Mikhail' }
];

let authorNextId = 4;

const posts = [
  { id: 1, title: 'Introduction to GraphQL', votes: 2, authorId: 1 },
  { id: 2, title: 'Welcome to Apollo', votes: 3, authorId: 2 },
  { id: 3, title: 'Advanced GraphQL', votes: 1, authorId: 2 },
  { id: 4, title: 'Launchpad is Cool', votes: 7, authorId: 3 }
];

const resolvers = {
  Author: {
    posts: author => posts.filter(p => p.authorId === author.id)
  },

  Post: {
    author: post => authors.find(a => a.id === post.authorId)
  },

  Query: {
    posts: () => posts,
    authors: () => authors,
    author: (_, { id }) => authors.find(a => a.id === id)
  },

  Mutation: {
    createAuthor: (_, { name }) => {
      const newAuthor = { id: authorNextId++, name };
      authors.push(newAuthor);
      return newAuthor;
    },
  },
};

export default resolvers;
