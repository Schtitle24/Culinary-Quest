
const sequelize = require('../config/connection.js');
const User = require('./User.js');
const QuestLog = require('./QuestLog.js');
const Quest = require('./Quest.js');
const QuestItems = require('./QuestItems.js');
const QuestLocation = require('./QuestLocation.js');

// Define associations between models
User.hasOne(QuestLog, { foreignKey: 'user_id' });
QuestLog.belongsTo(User, { foreignKey: 'user_id' });

QuestLog.hasMany(Quest, { foreignKey: 'quest_log_id' });
Quest.belongsTo(QuestLog, { foreignKey: 'quest_log_id' });

Quest.hasMany(QuestItems, { foreignKey: 'quest_id' });
QuestItems.belongsTo(Quest, { foreignKey: 'quest_id' });

Quest.belongsToMany(QuestLocation, { through: 'QuestJunction', foreignKey: 'quest_id' });
QuestLocation.belongsToMany(Quest, { through: 'QuestJunction', foreignKey: 'quest_location_id' });

module.exports = {
  sequelize,
  User,
  QuestLog,
  Quest,
  QuestItems,
  QuestLocation,
};