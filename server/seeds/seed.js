const { faker } = require('@faker-js/faker');
const { User, QuestLog, Quest, QuestLocation, QuestItems } = require('../models');

const seedDatabase = async () => {
  for (let i = 0; i < 2; i++) {
    // Create a user
    const user = await User.create({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });

    // Create a quest log for the user
    const questLog = await QuestLog.create({
      user_id: user.user_id,
      completionDate: faker.date.future(),
    });

    // Create a quest for the quest log
    const quest = await Quest.create({
      questName: faker.lorem.words(3),
      quest_log_id: questLog.quest_log_id,
    });

    // Create a quest location
    const questLocation = await QuestLocation.create({
      questLocation: faker.address.city(),
    });

    // Create 10 quest items for the quest
    for (let j = 0; j < 10; j++) {
      await QuestItems.create({
        itemName: faker.commerce.productName(),
        quest_id: quest.quest_id,
      });
    }
  }

  console.log('Database seeded successfully!');
};

seedDatabase();