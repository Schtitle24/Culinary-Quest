const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuestItems extends Model{};

QuestItems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
        modelName: 'QuestItems',
      },
);

module.exports = QuestItems;