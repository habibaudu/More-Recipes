import { Users, Recipes } from './recipes';

module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Favourite.associate = (models) => {
    Favourite.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  Favourite.associate = (models) => {
    Favourite.belongsTo(models.Recipes, {
      foreignKey: 'recipeId'
    });
  };
  return Favourite;
};
