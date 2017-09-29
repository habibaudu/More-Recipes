import recipesController from "../controllers/recipes";
import recipesreviewController from "../controllers/recipesreview";

 const route = (app) => {
    app.get("/api",(req,res)=> res.status(200).send({
        message:"welcome to the Recipe API",

    }));

     app.post("/api/recipes",recipesController.create);
     app.put("/api/recipes/:recipeId",recipesController.update);
     app.delete("/api/recipes/:recipesId",recipesreviewController.delete);
     app.get("/api/recipes",recipesController.list);

    app.post("/api/recipes/:recipeId/reviews",recipesreviewController.create);


export default route;