import { Users } from './recipes';

module.exports = (sequelize, DataTypes) => {
  const Voting = sequelize.define('Voting', {
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipeId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    upVote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    downVote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  );
  Voting.associate = models =>
    Users.hasOne(models.Voting, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });

  Voting.associate = models =>
    Voting.belongsTo(models.Recipes, {
      foreignKey: 'recipeId',
    });

  return Voting;
};
