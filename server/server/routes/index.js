
import recipejson from "../models/recipe.json";

module.exports = (app) => {
  let sortedDate;
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipes API!',
  }));
  

  app.get("/api/recipes",function(req,res){
     if (req.query.sort=="upvotes" && req.query.order === "desc" ) {
          
        sortedDate = recipejson;
              var sorted = sortedDate.sort(function (a, b) { 
                 return b.upvotes - a.upvotes 
                });
          var sorted2 = sorted.slice(0, 2);
       

      return res.status(200).json(sorted2);
       }
else
     return res.json({
       recipe:recipejson,
       error:false
     });
  });

  app.post("/api/recipes",function(req,res){
    if(!req.body.user){

      return res.json({
        message:"No recipe added",
        error:true
      });
    }
    recipejson.push(req.body);
    return res.json({
      message:"Created successfully",
      error:false
    });

  });

   app.delete("/api/recipes/:recipesid",function(req,res){
       for(let i=0; i < recipejson.length; i++){
         if(recipejson[i].id === parseInt(req.params.recipeid,10)){
           recipejson.splice(i,1);
           return res.json({
             message:"deleted successfully",
             error:false
           });
         }
       }

       return res.status(404).json({
         message:"Recipe not found",
         error:true
       });
   });

   app.put("/api/recipes/:recipeid",function(req,res){
       for(let i=0; i< recipejson.length; i++){
         if(recipejson[i].id === parseInt(req.params.recipeid,10)){
           recipejson[i].recipe = req.body.recipe;
           recipejson[i].hobby = req.body.hobby;
           return res.json({
             message :"updated sucessfully",
             error:false
           });
         }
       }
       return res.status(404).json({
         message:"Recipe not found",
         error:true
       });
   });

   app.post("/api/recipes/:recipeid/reviews",function(req,res){
      for(let i=0; i< recipejson.length; i++){
         if(recipejson[i].id === parseInt(req.params.recipeid,10)){
           recipejson[i].reviews.push(req.body);
           return res.json({
             message :"Reviews Created sucessfully",
             error:false
           });
         }
       }
           
   });


  // For any other request method on Recipes , we're going to return "Method Not Allowed"
  app.all('/api/recipes/:RecipeId/', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};

