import models from '../models';

const Reviews = models.Reviews;
export default {
  postReviews(req, res) {
    return Reviews
      .create({
        userReview: req.body.userReview,
        recipeId: req.params.recipeId,
      })
      .then(reviews => res.status(201).send(reviews))
      .catch(error => res.status(400).send(error));
  },
};
