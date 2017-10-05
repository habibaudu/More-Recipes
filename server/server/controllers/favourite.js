import models from '../models';

const Favourite = models.Favourite;

export default {
  favouriteRecipes(req, res) {
    return Favourite
      .findById(req.params.userId, {
        include: [{
          model: Recipes,
          as: 'recipeId',
        }],
      })
      .then((favourite) => {
        if (!favourite) {
          return res.status(404).send({
            message: '',
          });
        }
        return res.status(200).send(favourite);
      })
      .catch(error => res.status(400).send(error));
  },


};
