const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuestLog extends Model{};

QuestLog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: { 
            type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id',
          },
        },
        quest_id: {
            user_id: { 
                type: DataTypes.INTEGER,
              references: {
                  model: 'Quest',
                  key: 'id',
              },
            },
        },
    },



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'QuestLog',
      },
    
);

module.exports = QuestLog;

