const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuestLocation extends Model {}

QuestLocation.init(
  {
    quest_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    quest_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'QuestLocation',
  }
);

module.exports = QuestLocation;
