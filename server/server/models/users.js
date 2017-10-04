module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastLogin: {
      type: DataTypes.DATE
    },

    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
  });

  Users.associate = models =>
    Users.hasMany(models.Recipes, {
      foreignKey: 'userId',
      as: 'recipes'
    });

  Users.associate = models =>
    Users.hasMany(models.Reviews, {
      foreignKey: 'userId',
      as: 'reviews'
    });
  return Users;
};
