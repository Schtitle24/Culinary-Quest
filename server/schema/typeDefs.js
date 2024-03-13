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
    quest_location_id: Int!
}
type QuestLog {
    quest_log_id: Int!
    user_id: Int!
    completionDate: String!
  }
  type QuestLocation {
    quest_location_id: Int!
    quest_location: String!
  }
  type QuestJunction {
    quest_id: Int!
    quest_location_id: Int!
  }
  type QuestItems {
    quest_item_id: Int!
    itemName: String!
    quest_id: Int!
  }
  type QuestCard {
    username: String!
    questName: String!
    quest_location: String!
    description: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    questLogs: [QuestLog]
    questLocations: [QuestLocation]
    questJunctions: [QuestJunction]
    questItems(quest_id: Int!): [QuestItems]
    quests: [Quest]
    user(user_id: Int!): User
    questLog(quest_log_id: Int!): QuestLog
    questLocation(quest_location_id: Int!): QuestLocation
    questJunction(quest_id: Int, quest_location_id: Int!): QuestJunction
    questItem(quest_item_id: Int!): QuestItems
    quest(quest_id: Int!): Quest
    questCard(city: String!,): [QuestCard]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(user_id: Int!, username: String!, email: String!, password: String!): User
    deleteUser(user_id: Int!): User
    login(email: String!, password: String!): Auth

    addQuestLog(user_id: Int!): QuestLog
    updateQuestLog(quest_log_id: Int!, user_id: Int!): QuestLog
    deleteQuestLog(quest_log_id: Int!): QuestLog

    addQuestLocation(questLocation: String!): QuestLocation
    updateQuestLocation(quest_location_id: Int!, questLocation: String!): QuestLocation
    deleteQuestLocation(quest_location_id: Int!): QuestLocation

    addQuestJunction(questId: Int!, questLocationId: Int!): QuestJunction
    deleteQuestJunction(questId: Int!, questLocationId: Int!): QuestJunction

    addQuestItems(itemName: String!, quest_id: Int!): QuestItems
    updateQuestItems(quest_item_id: Int!, itemName: String!, quest_id: Int!): QuestItems
    deleteQuestItems(quest_item_id: Int!): QuestItems

    addQuest(questName: String!, questDescription: String!, quest_log_id: Int!, quest_location: String!): Quest
    updateQuest(quest_id: Int!, questName: String!, questDescription: String!, quest_log_id: Int!): Quest
    deleteQuest(quest_id: Int!): Quest

    
  }
`;

module.exports = typeDefs