
module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
});
  Favourite.associate = models =>
    Users.hasMany(models.Favourite), {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
    });
  
  Favourite.associate = models =>
    Recipes.hasMany(models.Favourite, {
      foreignKey: 'recipeId'
      
    });
  
    
  return Favourite;
};
