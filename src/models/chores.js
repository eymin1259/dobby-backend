const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Chores = sequelize.define(
    "Chores",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        comment: "chores_primary_index",
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        comment: "chores_user_index",
      },
      chores_index: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        unique: true,
        comment: "chores_chores_index",
      },
      task_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "task_name",
      },
      memo: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "memo",
      },
      register_time: {
        type: DataTypes.DATETIME,
        allowNull: false,
        comment: "register_time",
      },
      repeat_cycle: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "repeat_cycle",
      },
      repeat_end_date: {
        type: DataTypes.DATETIME,
        allowNull: true,
        comment: "repeat_end_date",
      },
      revise_time: {
        type: DataTypes.DATETIME,
        allowNull: true,
        comment: "revise_time",
      },
      delete_time: {
        type: DataTypes.DATETIME,
        allowNull: true,
        comment: "delete_time",
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", //한글 저장
    }
  );
  return Chores;
};
