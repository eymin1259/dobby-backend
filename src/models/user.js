const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany;
    }
  }
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
