import userControllers from '../controllers/users';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipes API!',
  }));

  app.post('/register', userControllers.Register);
  app.all('/api/recipes/:RecipeId/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};

