/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      Image
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      Image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      Image
      createdAt
      updatedAt
    }
  }
`;
