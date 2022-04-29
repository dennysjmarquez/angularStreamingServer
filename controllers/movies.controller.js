const { request, response } = require('express');

const DB = require('../dbfile/movies.json');

const getMovies = (req = request, res = response) => {
	res.status(200).json(DB);
};

module.exports = {
	getMovies,
};
