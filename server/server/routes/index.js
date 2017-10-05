import controller from '../controllers';
import controller2 from '../controllers';
import controller3 from '../controllers';
import controller4 from '../controllers';

const userControllers = controller.Users;
const recipesControllers = controller2.Recipes;
const reviewsControllers = controller3.Reviews;
const favouriteControllers = controller4.Favourite;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipes API!',
  }));

  app.post('/signup', userControllers.registerUser);
  app.post('/signin', userControllers.loginUser);
  app.post('/api/recipes', recipesControllers.createRecipes);
  app.put('/api/recipes/:recipeId', recipesControllers.updateRecipes);
  app.delete('/api/recipes/:recipeId', recipesControllers.deleteRecipes);
  app.get('/api/recipes', recipesControllers.listRecipes);
  app.post('/api/recipes/:recipeId/reviews', reviewsControllers.postReviews);
  app.get('/api/users/:userId/recipes', favouriteControllers.favouriteRecipes);
  app.all('/api/recipes/:RecipeId/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};

