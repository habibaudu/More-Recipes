module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Ingredient: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      upVotes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
      },
      downVotes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recipeId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Recipes',
          key: 'id',
          as: 'userId',
        },
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
