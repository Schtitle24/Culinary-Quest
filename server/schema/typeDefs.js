const typeDefs = `
type User {
   user_id: Int!
    username: String!
    email: String!
    password: String!
}
type Quest {
    quest_id: Int!
    questName: String!
    questDescription: String!
    quest_log_id: Int!
}
type QuestLog {
    quest_log_id: Int!
    user_id: Int!
    completionDate: String!
  }
  type QuestLocation {
    quest_location_id: Int!
    questLocation: String!
  }
  type QuestJunction {
    questId: Int!
    questLocationId: Int!
  }
  type QuestItems {
    quest_item_id: Int!
    itemName: String!
    quest_id: Int!
  }
  type QuestCard {
    username: String!
    questName: String!
    questLocation: String!
    description: String!
  }
  type Query {
    users: [User]
    questLogs: [QuestLog]
    questLocations: [QuestLocation]
    questJunctions: [QuestJunction]
    questItems: [QuestItems]
    quests: [Quest]
    user(user_id: Int!): User
    questLog(quest_log_id: Int!): QuestLog
    questLocation(quest_location_id: Int!): QuestLocation
    questJunction(questId: Int, questLocationId: Int!): QuestJunction
    questItem(quest_item_id: Int!): QuestItems
    quest(quest_id: Int!): Quest
    questCard(quest_id: Int!): QuestCard
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    updateUser(user_id: Int!, username: String!, email: String!, password: String!): User
    deleteUser(user_id: Int!): User

    addQuestLog(user_id: Int!, completionDate: String!): QuestLog
    updateQuestLog(quest_log_id: Int!, user_id: Int!, completionDate: String!): QuestLog
    deleteQuestLog(quest_log_id: Int!): QuestLog

    addQuestLocation(questLocation: String!): QuestLocation
    updateQuestLocation(quest_location_id: Int!, questLocation: String!): QuestLocation
    deleteQuestLocation(quest_location_id: Int!): QuestLocation

    addQuestJunction(questId: Int!, questLocationId: Int!): QuestJunction
    deleteQuestJunction(questId: Int!, questLocationId: Int!): QuestJunction

    addQuestItems(itemName: String!, quest_id: Int!): QuestItems
    updateQuestItems(quest_item_id: Int!, itemName: String!, quest_id: Int!): QuestItems
    deleteQuestItems(quest_item_id: Int!): QuestItems

    addQuest(questName: String!, questDescription: String!, quest_log_id: Int!): Quest
    updateQuest(quest_id: Int!, questName: String!, questDescription: String!, quest_log_id: Int!): Quest
    deleteQuest(quest_id: Int!): Quest
  }
`;

module.exports = typeDefs