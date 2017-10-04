module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    recipeId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ingredient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    upVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    downVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
  });

  Recipes.associate = (models) =>
      Recipes.BelongsTo(models.Users,{
        foreignKey: 'userId',
         onDelete: 'CASCADE',
      });

   Recipes.associate = (models) =>
      Recipes.hasMany(models.Reviews,{
        foreignKey: 'recipeId',
        as: Reviews
      });
     
  return Recipes;
};