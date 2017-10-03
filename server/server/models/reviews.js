module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    ReviewId:{
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userReview:{
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  Reviews.associate=(models)=>
      Reviews.BelongsTo(models.Recipes,{
        foreignKey: "recipeId",
         onDelete: 'CASCADE',
      });

   Reviews.associate=(models)=>
      Reviews.BelongsTo(models.Users,{
        foreignKey: "UserId",
        as: Reviews
      });
  return Reviews;
};