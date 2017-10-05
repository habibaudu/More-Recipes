// import recipejson from '../models/recipe.json';

// module.exports = (app) => {
//   let sortedDate;
//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Recipes API!',
//   }));

//   app.get('/api/recipes', (req, res) => {
//     if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
//       sortedDate = recipejson;
//       const sorted = sortedDate.sort((a, b) => b.upvotes - a.upvotes);
//       const sorted2 = sorted.slice(0, 2);
//       return res.status(200).json(sorted2);
//     } else if (!req.query.sort === 'upvotes' && !req.query.order === 'desc') {
//       return res.json({
//         recipe: recipejson,
//         error: false
//       });
//     }
//   });

//   app.post('/api/recipes', (req, res) => {
//     if (!req.body.user && !req.body.name && !req.body.id && !req.body.Description && !req.body.Ingredient) {
//       return res.json({
//         message: 'No recipe added',
//         error: true
//       });
//     }
//     recipejson.push(req.body);
//     return res.json({
//       message: 'Created successfully',
//       error: false
//     });
//   });

//   app.delete('/api/recipes/:recipeId', (req, res) => {
//     for (let i = 0; i < recipejson.length; i++ ) {
//       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
//         recipejson.splice(i, 1);
//         return res.json({
//           message: 'deleted successfully',
//           error: false
//         });
//       }
//     }

//     return res.status(404).json({
//       message: 'Recipe not found',
//       error: true
//     });
//   });
//   app.put('/api/recipes/:recipeId', (req, res) => {
//     for (let i = 0; i < recipejson.length; i++) {
//       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
//         recipejson[i].recipe = req.body.recipe;
//         recipejson[i].Ingredient = req.body.Ingredient;
//         return res.json({
//           message: 'updated sucessfully',
//           error: false
//         });
//       }
//     }
//     return res.status(404).json({
//       message: 'Recipe not found',
//       error: true
//     });
//   });
//   app.post('/api/recipes/:recipeId/reviews', (req, res) => {
//     for (let i = 0; i < recipejson.length; i++) {
//       if (recipejson[i].id === parseInt(req.params.recipeId, 10)) {
//         recipejson[i].reviews.push(req.body);
//         return res.json({
//           message: 'Reviews Created sucessfully',
//           error: false
//         });
//       }
//     }
//   });
//   /**
//    * 
//    */
//   app.all('/api/recipes/:RecipeId/', (req, res) =>
//     res.status(405).send({
//       message: 'Method Not Allowed',
//     }));
// };

import controller from '../controllers';

const userControllers = controller.Users;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipes API!',
  }));

  app.post('/signup', userControllers.createUser);
  app.post('/signin', userControllers.loginUser);
  app.all('/api/recipes/:RecipeId/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
    }));
};

