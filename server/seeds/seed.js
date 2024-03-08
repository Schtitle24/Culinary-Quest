const { faker } = require('@faker-js/faker');
const { User, QuestLog, Quest, QuestLocation, QuestItems } = require('../models');
const db = require('../models');

let userIdCounter = 1;
let questlogIdCounter = 1;
let questIdCounter = 1;
let questLocationIdCounter = 1;
let questItemIdCounter = 1;

const seedDatabase = async () => {
  await db.sequelize.sync({ force: true });

  // Create a user
  const user = await User.create({
    user_id: userIdCounter++,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });

  // Create a quest log for the user
  const questLog = await QuestLog.create({
    quest_log_id: questlogIdCounter++,
    user_id: user.user_id,
  });

  // Create a quest for the quest log
  const quest = await Quest.create({
    quest_id: questIdCounter++,
    questName: faker.lorem.words(3),
    questDescription: faker.lorem.paragraph(), // Adding description
    quest_log_id: questLog.quest_log_id,
  });

  // Create a quest location
  const questLocation = await QuestLocation.create({
    quest_location_id: questLocationIdCounter++,
    questLocation: faker.location.city(),
  });

  // Create 10 quest items for the quest
  for (let i = 0; i < 10; i++) {
    await QuestItems.create({
      quest_item_id: questItemIdCounter++,
      itemName: faker.commerce.productName(),
      quest_id: quest.quest_id,
    });
  }

  console.log('Database seeded successfully!');
};

seedDatabase();
