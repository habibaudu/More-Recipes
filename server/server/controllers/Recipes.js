import models from '../models';

// const User = models.Users;
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
      .then(recipes => res.status(201).send(recipes)) // working
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Recipes
      .find({
        where: {
          id: req.params.recipeId,

        },
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

  destroy(req, res) {
    return Recipes
      .findById(req.params.recipeId)
      .then((recipes) => {
        if (!recipes) {
          return res.status(400).send({
            message: 'Recipes Not Found',
          });
        }
        return recipes
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  listRecipes(req, res) {
    let sortRecipes;
    if (req.query.sort === 'upvotes' && req.query.order === 'desc') {
      sortRecipes = Recipes.upVotes;
      const sorted = sortRecipes.sort((a, b) => b.upVotes - a.upVotes);
      const sorted2 = sorted.slice(0, 10);
      return res.status(200).json({ sorted2 });
    }
    return Recipes
      .all()
      .then(recipes => res.status(200).send(recipes)) // working
      .catch(error => res.status(400).send(error));
  },
};
