const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: false
        },
        notes: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
