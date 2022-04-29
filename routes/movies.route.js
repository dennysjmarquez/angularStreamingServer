const { Router } = require('express');
const router = Router();

// Ruta /api/movies

// Controllers
const { getMovies } = require('../controllers/movies.controller');

// middlewares
const { validateJWT } = require('../middlewares/validate-jwt.middleware');

router.get('/', [validateJWT], getMovies);

module.exports = router;
