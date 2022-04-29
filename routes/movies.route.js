const { Router } = require('express');
const { getMovies } = require('../controllers/movies.controller');
const router = Router();

router.get('/', [], getMovies);

module.exports = router;
