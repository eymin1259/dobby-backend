const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class chores extends Model {
    static associate(models) {
      chores.hasMany(models.tasks, {
        foreignKey: "chores_index",
      });
    }
  }
  chores.init(
    {
      // id: DataTypes.INTEGER,
      chores_index: DataTypes.INTEGER,
      chores_name: DataTypes.STRING(20),
    },
    {
      sequelize,
      modelName: "chores",
    }
  );
  return chores;
  // const Chores = sequelize.define(
  //   "Chores",
  //   {
  //     id: {
  //       type: DataTypes.INTEGER,
  //       primaryKey: true,
  //       allowNull: false,
  //       comment: "chores_primary_index",
  //     },
  //     chores_index: {
  //       type: DataTypes.INTEGER,
  //       allowNull: true,
  //       unique: true,
  //       comment: "chores_index",
  //     },
  //     chores_name: {
  //       type: DataTypes.STRING(20),
  //       allowNull: false,
  //       unique: true,
  //       comment: "chores_name",
  //     },
  //   },
  //   {
  //     charset: "utf8",
  //     collate: "utf8_general_ci", //한글 저장
  //   }
  // );
  // return Chores;
};
