# Servidor para el proyecto (angularStreamingServer)

Este es un servidor de Node.js que implementa a helmet para la protección de ataques y cors para limitar el acceso a la API.

Este servidor sirve un archivo JSON como dB en un único endPoint protegido por un token de auth0.

## Como hacerlo funcionar 

Instale las dependencias del proyecto:

```bash
npm install
```

Cree un archivo .env en el directorio del proyecto y agregue las siguientes configuraciones:

```bash
PORT=
CLIENT_ORIGIN_URL=
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
```




