import { gql } from '@apollo/client';

export const ADD_QUEST = gql`
mutation AddQuest($questName: String!, $questDescription: String!, $questLogId: Int!, $questLocation: String!) {
  addQuest(
    questName: $questName,
    questDescription: $questDescription,
    quest_log_id: $questLogId
    questLocation: $questLocation
  ) {
    questDescription
    questName
    quest_id
    quest_log_id
    questLocation
  }
}
`;

export const DELETE_QUEST = gql`
mutation DeleteQuest($deleteQuestQuestId2: Int!) {
  deleteQuest(quest_id: $deleteQuestQuestId2) {
    quest_id
    questName
    questDescription
    quest_log_id
  }
}
`;

export const UPDATE_QUEST = gql`
mutation UpdateQuest(
  $updateQuestQuestId2: Int!,
  $questName: String!,
  $questDescription: String!,
  $questLogId: Int!
) {
  updateQuest(
    quest_id: $updateQuestQuestId2,
    questName: $questName,
    questDescription: $questDescription,
    quest_log_id: $questLogId
  ) {
    quest_id
    questName
    questDescription
    quest_log_id
  }
}
`;

export const ADD_ITEMS = gql`
mutation AddQuestItems($itemName: String!, $questId: Int!) {
  addQuestItems(
    itemName: $itemName,
    quest_id: $questId
  ) {
    itemName
    quest_id
    quest_item_id
  }
}
`;

export const DELETE_ITEMS = gql`
mutation DeleteQuestItems($deleteQuestItemsQuestItemId2: Int!) {
  deleteQuestItems(
    quest_item_id: $deleteQuestItemsQuestItemId2
  ) {
    itemName
    quest_id
    quest_item_id
  }
}
`;


export const UPDATE_ITEMS = gql`
mutation UpdateQuestItems(
  $updateQuestItemsQuestItemId2: Int!,
  $itemName: String!,
  $questId: Int!
) {
  updateQuestItems(
    quest_item_id: $updateQuestItemsQuestItemId2,
    itemName: $itemName,
    quest_id: $questId
  ) {
    itemName
    quest_id
    quest_item_id
  }
}
`;


export const ADD_JUNCTION = gql`
mutation AddQuestJunction($questId: Int!, $questLocationId: Int!) {
  addQuestJunction(
    questId: $questId,
    questLocationId: $questLocationId
  ) {
    quest_id
    quest_location_id
  }
}
`;

export const DELETE_JUNCTION = gql`
mutation DeleteQuestJunction($questId: Int!, $questLocationId: Int!) {
  deleteQuestJunction(
    questId: $questId,
    questLocationId: $questLocationId
  ) {
    quest_id
    quest_location_id
  }
}
`;

export const ADD_LOCATION = gql`
mutation AddQuestLocation($questLocation: String!) {
  addQuestLocation(
    questLocation: $questLocation
  ) {
    questLocation
    quest_location_id
  }
}
`;

export const DELETE_LOCATION = gql`
mutation DeleteQuestLocation($questLocationId: Int!) {
  deleteQuestLocation(
    quest_location_id: $questLocationId
  ) {
    questLocation
    quest_location_id
  }
}
`;

export const UPDATE_LOCATION = gql`
mutation UpdateQuestLocation($questLocationId: Int!, $questLocation: String!) {
  updateQuestLocation(
    quest_location_id: $questLocationId,
    questLocation: $questLocation
  ) {
    questLocation
    quest_location_id
  }
}
`;

export const ADD_LOG = gql`
mutation AddQuestLog($userId: Int!) {
  addQuestLog(
    user_id: $userId
  ) {
    quest_log_id
    user_id
  }
}
`;

export const DELETE_LOG = gql`
mutation DeleteQuestLog($deleteQuestLogQuestLogId2: Int!) {
  deleteQuestLog(
    quest_log_id: $deleteQuestLogQuestLogId2
  ) {
    quest_log_id
    user_id
  }
}
`;

export const UPDATE_LOG = gql`
mutation UpdateQuestLog($updateQuestLogQuestLogId2: Int!, $userId: Int!) {
  updateQuestLog(
    quest_log_id: $updateQuestLogQuestLogId2,
    user_id: $userId
  ) {
    quest_log_id
    user_id
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(
    username: $username,
    email: $email,
    password: $password
  ) {
    token
  }
}
`;



export const LOGIN_USER = gql`
mutation login( $email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation DeleteUser($deleteUserUserId2: Int!) {
  deleteUser(
    user_id: $deleteUserUserId2
  ) {
    email
    password
    user_id
    username
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser(
  $updateUserUserId2: Int!,
  $username: String!,
  $email: String!,
  $password: String!
) {
  updateUser(
    user_id: $updateUserUserId2,
    username: $username,
    email: $email,
    password: $password
  ) {
    email
    password
    user_id
    username
  }
}
`

