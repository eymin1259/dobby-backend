const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Chores = sequelize.define(
    "Chores",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        comment: "chores_primary_index",
      },
      chores_index: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        comment: "chores_index",
      },
      chores_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        comment: "chores_name",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  return Chores;
};
