import models from '../models';

const User = models.Users;
const Recipes = models.Recipes;

export default {
  createRecipes(req, res) {
    return Recipes
      .create({

        name: req.body.name,
        Ingredient: req.body.Ingredient,
        Description: req.body.Description,
        upVotes: req.body.upVotes,
        downVotes: req.body.downVotes,
      })
      .then(recipes => res.status(201).send(recipes)) //working
      .catch(error => res.status(400).send(error));
  },


  updateRecipes(req, res) {
    return Recipes
      .findById(req.params.id, {
        include: [{
          model: User,
        }],
      })
      .then((recipes) => {
        if (!recipes) {
          return res.status(404).send({
            message: 'Recipe Not Found',
          });
        }

        return recipes
          .update({
            Description: req.body.Description || recipes.Description,
            Ingredient: req.body.Ingredient || recipes.Ingredient,
          })
          .then(() => res.status(200).send(recipes)) // Send back the updated todo.
          .catch(error => res.status(400).send(error));
      })

      .catch(error => res.status(400).send(error));
  },

  deleteRecipes(req, res) {
    return Recipes
      .findById(req.params.id)
      .then((recipes) => {
        if (!recipes) {
          return res.status(400).send({
            message: 'Recipes Not Found',
          });
        }
        return recipes
          .delete()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  listRecipes(req, res) {
    return Recipes
      .all()
      .then(recipes => res.status(200).send(recipes))  //working
      .catch(error => res.status(400).send(error));
  },
};
