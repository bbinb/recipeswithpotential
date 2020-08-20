const Recipe = require('../models/recipe');

const recipe_index = (req, res) => {
    Recipe.find().sort({ createdAt: -1 })
    .then((result)=>{
res.render('index', {title:'List of Recipes', recipes: result})})
    .catch((err)=>{console.log(err);});    
    }

const recipe_details = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
    .then((result)=>{
    res.render('details', {title:'Recipe Details', recipe: result})})
    .catch((err)=>{console.log(err); res.status(404).render('404', { title: 'Recipe Not Found'});});
}

const recipe_create_get = (req, res) => {
    res.render('add', {title:'Add New Recipe'})}

const recipe_create_post = (req, res) => {
    const recipe = new Recipe(req.body);
    recipe.save()
    .then(()=> {
        res.redirect('/recipes');
    })
    .catch((err)=>{console.log(err);});
    }

const recipe_delete = (req, res) => {
    const id = req. params.id;
    Recipe.findByIdAndDelete(id)
    .then((result)=>{
        res.json({ redirect: '/recipes'});
    })
    .catch((err)=>{console.log(err);}); 
    }

    module.exports = {
        recipe_index,
        recipe_details,
        recipe_create_get,
        recipe_create_post,
        recipe_delete
    }