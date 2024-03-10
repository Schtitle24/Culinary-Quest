const { User, QuestLog, Quest, QuestLocation, QuestItems } = require('../models');

// // query our quest object a Quest
// // query out quest log which will identical to the 21-20 example
// //query for card with qustlocation, username, and description

// //  upodate mutation will be for checckboxes.  
// // allow users to delete entire quests. 
// const resolvers = {
//   Query: {
//     // Query to get all quests associated with a user_id
//     QuestLog: async (parent, { user_id }) => {
//       return QuestLog.findOne({
//         where: { user_id },
//         include: [{ model: Quest, include: QuestLocation }],
//       });
//     },

//     // Query to get a single quest by quest_id
//     Quest: async (parent, { quest_id }) => {
//       return Quest.findOne({user_id: quest_id });
//     },

//     // Query to get quest card details
//     QuestCard: async (parent, { quest_id }) => {
//       const quest = await Quest.findByPk(quest_id, {
//         include: QuestLocation,
//       });
//       if (!quest) {
//         throw new Error('Quest not found');
//       }
//       return {
//         questName: quest.questName,
//         questLocation: quest.QuestLocation.questLocation,
//         description: quest.description, // Assuming description is a field in Quest model
//       };
//     },
//   },

//   Mutation: {
//     // Mutation to add a new quest
//     addQuest: async (_, { questName, quest_log_id }) => {
//       return Quest.create({ questName, quest_log_id });
//     },
//   },
// };

// module.exports = resolvers;