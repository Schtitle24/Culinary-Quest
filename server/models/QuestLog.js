// models/QuestLog.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuestLog extends Model {}

QuestLog.init(
  {
    quest_log_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'user_id', 
      },
    },
    completionDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'QuestLog',
  }
);

module.exports = QuestLog;
