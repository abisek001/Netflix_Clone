const express = require('express');
const movieController = require('../Controller/video');

const route = express.Router();

route.get('/movie/', movieController.getMovie);                 // All Movie List
route.get('/movie/:Id', movieController.getMovieByID);                 // Specidic Movie by ID
route.get('/movies/:askedId/', movieController.getMovieById);      // Selective Movie List by Id

module.exports = route;