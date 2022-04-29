require('dotenv').config();
const { CORS_CLIENT_ORIGINS, SERVER_PORT } = require('./constant');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// crea el servidor de express
const app = new express();

// Middlewares
app.use(cors({ origin: CORS_CLIENT_ORIGINS })); // <--- Configurar CORS
app.use(helmet());

// Lectura y parseo del Body
app.use(express.json());

// Rutas
app.use('/api/movies', require('./routes/movies.route'));

// Inicia el servidor de express
app.listen(SERVER_PORT, (error) => {
	if (error) {
		return console.error(error);
	}
	console.log(`** Servidor corriendo en: http://localhost:${SERVER_PORT}/ **`);
});
