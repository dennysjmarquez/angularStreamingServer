// Dominio y audience de auth0
const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE || 'dennysjmarquez.angularStreaming';
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'dennysjmarquez.auth0.com';

// Dominós permitidos para la consulta de la API
const CORS_CLIENT_ORIGINS = ['http://localhost:5200'];

// Puerto para el servidor
const normalizePort = (port) => parseInt(port, 10);

module.exports = {
	AUTH0_AUDIENCE,
	AUTH0_DOMAIN,
	SERVER_PORT: normalizePort(process.env.PORT || 3800),
	CORS_CLIENT_ORIGINS,
};
