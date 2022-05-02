# Servidor para el proyecto (angularStreaming)

Este es un servidor de Node.js que implementa a helmet para la protección de ataques y cors para limitar el acceso a la API.  

Este servidor sirve un archivo JSON como dB en un único endPoint protegido por un token de auth0.

Db de Películas con su Título, descripción, tipo de película, imagen y fecha

## Como hacerlo funcionar 

Instale las dependencias del proyecto:

```bash
npm install
```

Cree un archivo **.env** en el directorio del proyecto y agregue las siguientes configuraciones:

```bash
PORT=
CLIENT_ORIGIN_URL=
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
```

El **AUTH0_AUDIENCE** y **AUTH0_DOMAIN** lo puede obtener, en Auth0 en el Dashboard.

https://manage.auth0.com/dashboard/

**CLIENT_ORIGIN_URL** es la URL del cliente y **PORT** es el puerto en el que se va a montar el servidor

Ya con las configuraciones en **.env** corra el servidor con el siguiente comando:

```bash
npm start
```



