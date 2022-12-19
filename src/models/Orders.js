const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "Orders",
    {
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
      foodId: {
        type: DataTypes.INTEGER,
        field: "food_id",
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrSubId: {
        type: DataTypes.STRING,
        field: "arr_sub_id",
        allowNull: false
      }
    },
    {
      tableName: "orders",
      // disable createdAt, updatedAt
      timestamps: false,
    }
  );
};
