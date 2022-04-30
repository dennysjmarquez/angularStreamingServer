// Dominio y audience de auth0
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;

// Dominós permitidos para la consulta de la API
const CORS_CLIENT_ORIGIN = process.env.CORS_CLIENT_ORIGIN;
const CORS_CLIENT_ORIGINS = [CORS_CLIENT_ORIGIN];

// Puerto para el servidor
const normalizePort = (port) => parseInt(port, 10);

module.exports = {
	AUTH0_AUDIENCE,
	AUTH0_DOMAIN,
	SERVER_PORT: normalizePort(process.env.PORT),
	CORS_CLIENT_ORIGINS,
};
