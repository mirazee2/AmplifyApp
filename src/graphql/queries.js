
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      Image
      createdAt
      updatedAt
    }
  }
`;
export const listTodo = /* GraphQL */ `
  query ListTodo(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodo(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        Image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
