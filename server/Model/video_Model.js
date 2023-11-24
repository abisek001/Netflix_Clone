const mongoose = require('mongoose');

const Schema = mongoose.Schema;     // Object describing the schema or the data type of each element

const movieSchema = new Schema({
    title: String,
    banner: String,
    synopsis: String,
    rating:Number,
    filePath:String,
    trailer: String,
    bg:String
})

const Movie = mongoose.model('Video_Connection', movieSchema, 'movies');

 module.exports = { Movie }