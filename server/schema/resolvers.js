const { User, QuestLog, Quest, QuestLocation, QuestItems, QuestJunction } = require('../models');

const resolvers = {
  Query: {
    //fetch a single user by user_id
    user: async (_, { user_id }) => {
      return User.findByPk(user_id);
    },

    //fetch a single quest log by quest_log_id
    questLog: async (_, { quest_log_id }) => {
      return QuestLog.findByPk(quest_log_id);
    },

    //fetch a single quest location by quest_location_id
    questLocation: async (_, { quest_location_id }) => {
      return QuestLocation.findByPk(quest_location_id);
    },

    //fetch a single quest item by quest_item_id
    questItem: async (_, { quest_item_id }) => {
      return QuestItems.findByPk(quest_item_id);
    },

    //fetch all quests
    quests: async () => {
      return Quest.findAll();
    },

    //fetch all quest logs
    questLogs: async () => {
      return QuestLog.findAll();
    },

    //fetch all quest locations
    questLocations: async () => {
      return QuestLocation.findAll();
    },

    //fetch all quest items
    questItems: async () => {
      return QuestItems.findAll();
    },

    //fetch a single quest by quest_id with associated quest location and items
    quest: async (_, { quest_id }) => {
      return Quest.findByPk(quest_id, {
        include: [
          { model: QuestLocation },
          { model: QuestItems }
        ]
      });
    },

    //fetch a quest card with quest name, location, and description
    questCard: async (_, { quest_id }) => {
      // Find the quest junction associated with the given quest ID
      const questJunction = await QuestJunction.findOne({ where: { questId: quest_id },   
         include: [
        { model: QuestLocation }, 
        { model: Quest, 
          include: [
            { model: QuestItems },
            { model: QuestLog, 
            include: [
              {model: User}
            ]}
          ]}, 
      ]
      });
      if (!questJunction) {
        throw new Error('Quest junction not found');
      }
      console.log('questJunction:', questJunction);

      return {
        username: questLog.User.username,
        questName: quest.questName,
        questLocation: quest.QuestLocation.questLocation,
        description: quest.questDescription,
      };
    },
  },
// console log quest junction, create try block for quest card and do not bring a new error. 
  Mutation: {
    //add a new user
    addUser: async (_, { username, email, password }) => {
      return User.create({ username, email, password });
    },

    //update an existing user
    updateUser: async (_, { user_id, username, email, password }) => {
      const user = await User.findByPk(user_id);
      if (!user) {
        throw new Error('User not found');
      }
      user.username = username;
      user.email = email;
      user.password = password;
      await user.save();
      return user;
    },

    //delete a user
    deleteUser: async (_, { user_id }) => {
      const user = await User.findByPk(user_id);
      if (!user) {
        throw new Error('User not found');
      }
      await user.destroy();
      return user;
    },

    //add a new quest
    addQuest: async (_, { questName, questDescription, quest_log_id }) => {
      return Quest.create({ questName, questDescription, quest_log_id });
    },

    //update an existing quest
    updateQuest: async (_, { quest_id, questName, questDescription, quest_log_id }) => {
      const quest = await Quest.findByPk(quest_id);
      if (!quest) {
        throw new Error('Quest not found');
      }
      quest.questName = questName;
      quest.questDescription = questDescription;
      quest.quest_log_id = quest_log_id;
      await quest.save();
      return quest;
    },

    //delete a quest
    deleteQuest: async (_, { quest_id }) => {
      const quest = await Quest.findByPk(quest_id);
      if (!quest) {
        throw new Error('Quest not found');
      }
      await quest.destroy();
      return quest;
    },

    
  },
};

module.exports = resolvers;
