const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TASK extends Model {
    static associate(models) {
      // console.log("모델스", models);
      TASK.belongsTo(models.user, {
        foreignKey: "id",
      });
      TASK.belongsTo(models.CHORES, {
        foreignKey: "chores_index",
      });
    }
  }
  TASK.init(
    {
      // id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      chores_index: DataTypes.INTEGER,
      task_name: DataTypes.STRING(20),
      memo: DataTypes.STRING(100),
      register_time: DataTypes.DATE,
      repeat_cycle: DataTypes.INTEGER,
      repeat_end_date: DataTypes.DATE,
      revise_time: DataTypes.DATE,
      delete_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "TASK",
    }
  );
  return TASK;

  // const Task = sequelize.define(
  //   "Task",
  //   {
  //     id: {
  //       type: DataTypes.INTEGER,
  //       primaryKey: true,
  //       allowNull: false,
  //       unique: true,
  //       comment: "task_primary_index",
  //     },
  //     user_id: {
  //       type: DataTypes.INTEGER,
  //       allowNull: false,
  //       unique: true,
  //       comment: "task_user_index",
  //     },
  //     chores_index: {
  //       type: DataTypes.INTEGER,
  //       // allowNull: false,
  //       unique: true,
  //       comment: "task_chores_index",
  //     },
  //     task_name: {
  //       type: DataTypes.STRING(20),
  //       allowNull: false,
  //       comment: "task_name",
  //     },
  //     memo: {
  //       type: DataTypes.STRING(100),
  //       allowNull: true,
  //       comment: "memo",
  //     },
  //     // register_time: {
  //     //   type: DataTypes.DATETIME,
  //     //   allowNull: false,
  //     //   comment: "register_time",
  //     // },
  //     repeat_cycle: {
  //       type: DataTypes.INTEGER,
  //       allowNull: true,
  //       comment: "repeat_cycle",
  //     },
  //     // repeat_end_date: {
  //     //   type: DataTypes.DATETIME,
  //     //   allowNull: true,
  //     //   comment: "repeat_end_date",
  //     // },
  //     // revise_time: {
  //     //   type: DataTypes.DATETIME,
  //     //   allowNull: true,
  //     //   comment: "revise_time",
  //     // },
  //     // delete_time: {
  //     //   type: DataTypes.DATETIME,
  //     //   allowNull: true,
  //     //   comment: "delete_time",
  //     // },
  //   },
  //   {
  //     charset: "utf8",
  //     collate: "utf8_general_ci", //한글 저장
  //   }
  // );
  // return Task;
};
