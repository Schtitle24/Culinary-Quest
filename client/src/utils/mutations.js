import { gql } from '@apollo/client';

export const ADD_QUEST = gql`
ddQuest(questName: $questName, 
    questDescription: $questDescription, 
    quest_log_id: $questLogId) {
    questDescription
    questName
    quest_id
    quest_log_id
  }
}
`;

export const DELETE_QUEST = gql`
deleteQuest(quest_id: $deleteQuestQuestId2) {
    questDescription
    questName
    quest_id
    quest_log_id
  }
}
`;

export const UPDATE_QUEST = gql`
updateQuest(quest_id: $updateQuestQuestId2, 
    questName: $questName, 
    questDescription: $questDescription, 
    quest_log_id: $questLogId) {
    quest_id
    questName
    questDescription
    quest_log_id
  }
}
`;

export const ADD_ITEMS = gql`
addQuestItems(itemName: $itemName, 
    quest_id: $questId) {
    itemName
    quest_id
    quest_item_id
  }
}
`;

export const DELETE_ITEMS = gql`
deleteQuestItems(
    quest_item_id: $deleteQuestItemsQuestItemId2) {
    itemName
    quest_id
    quest_item_id
  }
}
`;

export const UPDATE_ITEMS = gql`
updateQuestItems(
    quest_item_id: $updateQuestItemsQuestItemId2, 
    itemName: $itemName, 
    quest_id: $questId) {
    itemName
    quest_id
    quest_item_id
  }
}
`;

export const ADD_JUNCTION = gql`
addQuestJunction(questId: $questId, 
    questLocationId: $questLocationId) {
    quest_id
    quest_location_id
  }
}
`;

export const DELETE_JUNCTION = gql`
deleteQuestJunction(questId: $questId,
     questLocationId: $questLocationId) {
    quest_id
    quest_location_id
  }
}
`;

export const ADD_LOCATION = gql`
addQuestLocation(questLocation: $questLocation) {
    questLocation
    quest_location_id
  }
}
`;

export const DELETE_LOCATION = gql`
deleteQuestLocation(quest_location_id: $questLocationId) {
    questLocation
    quest_location_id
  }
}
`;

export const UPDATE_LOCATION = gql`
updateQuestLocation(quest_location_id: $questLocationId, 
    questLocation: $questLocation) {
    questLocation
    quest_location_id
  }
}
`;

export const ADD_LOG = gql`
addQuestLog(user_id: $userId) {
    quest_log_id
    user_id
  }
}
`;

export const DELETE_LOG = gql`
deleteQuestLog(quest_log_id: $deleteQuestLogQuestLogId2) {
    quest_log_id
    user_id
  }
}
`;

export const UPDATE_LOG = gql`
updateQuestLog(quest_log_id: $updateQuestLogQuestLogId2, 
    user_id: $userId) {
    quest_log_id
    user_id
  }
}
`;

export const ADD_USER = gql`
addUser(username: $username, 
    email: $email, 
    password: $password) {
    email
    password
    user_id
    username
  }
}
`;

export const DELETE_USER = gql`
deleteUser(user_id: $deleteUserUserId2) {
    email
    password
    user_id
    username
  }
}
`;

export const UPDATE_USER = gql`
updateUser(user_id: $updateUserUserId2, 
    username: $username, 
    email: $email, 
    password: $password) {
    email
    password
    user_id
    username
  }
}
`