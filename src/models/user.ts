const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      profile_color: DataTypes.STRING,
      profile_url: DataTypes.STRING,
      signup_time: DataTypes.DATETIME,
      start_time: DataTypes.DATETIME,
      revise_time: DataTypes.DATETIME,
    },
    {}
  );
  User.associate = function (models) {};
};
