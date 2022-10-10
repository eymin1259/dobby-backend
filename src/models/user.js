const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.tasks, {
        foreignKey: "user_id",
      });
    }
  }
  users.init(
    {
      // id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      profile_color: DataTypes.STRING,
      profile_url: DataTypes.STRING,
      signup_time: DataTypes.DATE,
      start_time: DataTypes.DATE,
      revise_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "users",
    }
  );

  return users;
};

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define(
//     "User",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         allowNull: false,
//         unique: true,
//         comment: "user id",
//       },
//       user_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         comment: "user name",
//       },
//       user_email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         comment: "user email",
//       },
//       profile_color: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         comment: "profile color",
//       },
//       profile_url: {
//         type: DataTypes.STRING,
//         allowNull: true,
//         comment: "profile url",
//       },
//       signup_time: {
//         type: DataTypes.DATETIME,
//         allowNull: true,
//         comment: "signup_time",
//       },
//       start_time: {
//         type: DataTypes.DATETIME,
//         allowNull: true,
//         comment: "signup_time",
//       },
//       revise_time: {
//         type: DataTypes.DATETIME,
//         allowNull: true,
//         comment: "signup_time",
//       },
//     },
//     {
//       charset: "utf8",
//       collate: "utf8_general_ci", //한글 저장
//     }
//   );
//   return User;
// };
