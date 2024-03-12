module.exports = (sequelize, DataTypes) => {
  const QuestJunction = sequelize.define('QuestJunction', {
    // Define columns
    questId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Quest',
        key: 'quest_id'
      }
    },
    questLocationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'QuestLocation',
        key: 'quest_location_id'
      }
    }
  });


};

module.exports = QuestJunction;