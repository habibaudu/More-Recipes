module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userReview: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  Reviews.associate = models =>
    Reviews.belongsTo(models.Recipes, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  // Reviews.associate = models =>
  //   Reviews.belongsTo(models.Users, {
  //     foreignKey: 'UserId',
  //     as: Reviews
  //   });

  return Reviews;
};
