const { User, QuestLog, Quest, QuestLocation, QuestItems } = require('../models');

// query our quest object a Quest
// query out quest log which will identical to the 21-20 example
//query for card with qustlocation, username, and description

//  upodate mutation will be for checckboxes.  
// allow users to delete entire quests. 
const resolvers = {
  Query: {
    // Query to get all quests associated with a user_id
    QuestLog: async (parent, { user_id }) => {
      return QuestLog.findOne({
        where: { user_id },
        // include models 
        include: [{ model: Quest, include: QuestLocation }],
      });
    },

    // Query to get a single quest by quest_id
    Quest: async (parent, { quest_id }) => {
      const quest = await Quest.findOne({
        where: { quest_id },
        // Include  models: QuestLocation and QuestItems
        include: [
          { model: QuestLocation },
          { model: QuestItems }
        ]
      });

      // Check if the quest exists
      if (!quest) {
        throw new Error('Quest not found');
      }

      // Construct and return an object containing quest details
      return {
        questName: quest.questName,
        description: quest.description,
        questLocation: quest.QuestLocation ? quest.QuestLocation.questLocation : null,
        items: quest.QuestItems.map(item => item.itemName)
      };
    },

    // Query to get quest card details
    QuestCard: async (parent, { quest_id }) => {
      const quest = await Quest.findByPk(quest_id, {
        include: QuestLocation,
      });
      if (!quest) {
        throw new Error('Quest not found');
      }
      return {
        questName: quest.questName,
        questLocation: quest.QuestLocation.questLocation,
        description: quest.description, 
      };
    },
  },

  Mutation: {
    // Mutation to add a new quest
    addQuest: async (_, { questName, quest_log_id }) => {
      return Quest.create({ questName, quest_log_id });
    },
  },
};

module.exports = resolvers;