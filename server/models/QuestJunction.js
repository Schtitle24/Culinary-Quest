const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');


class QuestJunction extends Model {}

QuestJunction.init({
    // Define columns
    quest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Quest',
        key: 'quest_id'
      }
    },
    quest_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'QuestLocation',
        key: 'quest_location_id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'QuestJunction',
  });

 module.exports = QuestJunction;