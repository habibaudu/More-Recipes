import recipes from "../dummydata/recipe.json"; 
import jsonfile from 'jsonfile';

export default {
   list(req, res) {

       let returnData;
       let offset = 0;
       let count = 500;

       if (req.query && req.query.offset) {
           offset = parseInt(req.query.offset, 10);
       }

       if (req.query && req.query.count) {
           count = parseInt(req.query.count, 10);
       }

       if (recipesData) returnData = recipesData.slice(offset, offset + count);

       if (req.query && req.query.sort) {
           if (req.query.order && req.query.order === "asc") {
               returnData.sort(function (a, b) { return a.upvotes - b.upvotes });
           }
           if (req.query.order && req.query.order === "desc") {
               returnData.sort(function (a, b) { return b.upvotes - a.upvotes });
           }
       }

       res.status(200).json(returnData);

   },

   create(req, res) {
       req.body["id"] = 1 + Math.max.apply(Math, recipesData.map((obj) => { return obj.id; }));
       req.body["reviews"] = [];
       recipesData.push(req.body);

       jsonfile.writeFile(__dirname + '/../models/recipes-data.json', recipesData, (err) => {
           if (err) {
               return console.log(err);
           }
       });

       res.status(200).json(req.body);
   },

   update(req, res) {

       for (let i = 0; i < recipesData.length; i++) {
           if (recipesData[i].id == req.params.recipeId) {
               req.body["id"] = recipesData[i].id;
               req.body["reviews"] = recipesData[i].review;
               recipesData[i] = req.body;
               break;
           }
       }

       jsonfile.writeFile(__dirname + '/../models/recipes-data.json', recipesData, (err) => {
           if (err) {
               return console.log(err);
           }
       });

       res.status(200).json(req.body);
   },

   delete(req, res) {

       for (let i = 0; i < recipesData.length; i++) {
           if (recipesData[i].id === req.params.recipeId) {
               recipesData.splice(i, 1);
               break;
           }
       }

       jsonfile.writeFile(__dirname + '/../models/recipes-data.json', recipesData, (err) => {
           if (err) {
               return console.log(err);
           }
       });

       res.status(200).json(recipesData);
   }
}





 
    
  



