// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class QuestItems extends Model {}

// QuestItems.init(
//   {
//     quest_item_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     itemName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     quest_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Quest',
//         key: 'quest_id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'QuestItems',
//   }
// );

// module.exports = QuestItems;
