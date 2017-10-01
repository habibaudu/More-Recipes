
global.recipe=[
  {
    "id":1,
    "recipe":"Fried Rice",
    "Ingredient":"rice,cabage",
    "Equipment":"pot,knives",
    "user":"boss",
    "upvote":"15"
  },

  {
    "id":2,
    "recipe":"Porridge",
    "Ingredient":"yam,oil",
    "Equipment":"pot,knives",
    "user":"mariam",
    "upvote":"17"
  }

]

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Recipes API!',
  }));

  app.get("/api/recipes",function(req,res){
     return res.json({
       recipe:global.recipe,
       error:false
     });
  });

  app.post("/api/recipes",function(req,res){
    if(!req.body.user){

      return res.json({
        message:"User name missing",
        error:true
      });
    }
    global.recipe.push(req.body);
    return res.json({
      message:"success",
      error:false
    });

 

  });

   app.delete("/api/recipes/:recipesid",function(req,res){
       for(let i=0; i < global.recipe.length; i++){
         if(global.users[i].id === parseInt(req.params.recipeid,10)){
           global.recipe.splice(i,1);
           return res.json({
             message:"success",
             error:false
           });
         }
       }

       return res.status(404).json({
         message:"User not found",
         error:true
       });
   });

   app.put("/api/recipes/:recipeid",function(req,res){
       for(let i=0; i< global.users.length; i++){
         if(global.recipe[i].id === parseInt(req.params.recipeid,10)){
           global.recipe[i].recipe = req.body.name;
           global.recipe[i].hobby = req.body.hobby;
           return res.json({
             message :"sucess",
             error:false
           });
         }
       }
       return res.status(404).json({
         message:"User not found",
         error:true
       });
   });
  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};

