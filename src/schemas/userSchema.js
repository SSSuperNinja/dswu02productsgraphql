const { gql } = require('apollo-server');

const UserTypeDefs = gql`
  type User {
    _id: ID!
    facturapiId: String!
    rfc: String!
    name: String!
    email: String!
    password: String!
    direccion: String!
    zip: String!
    tel: Int!
    createdAt: String!
    role: String!
    payMethod: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      rfc: String!,
      name: String!,
      email: String!,
      password: String!,
      direccion: String!,
      zip: String!,
      tel: Int!,
      role: String!,
      payMethod: String!
    ): User

    updateUser(
      _id: ID!,
      rfc: String,
      name: String,
      email: String,
      password: String,
      direccion: String,
      zip: String,
      tel: Int,
      role: String,
      payMethod: String
    ): User

    deleteUser(_id: ID!): User
  }
`;

module.exports = UserTypeDefs;
