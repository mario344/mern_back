const express = require('express');
const app = express();

/*=============================================
IMPORTAMOS EL CONTROLADOR
=============================================*/

const Usuarios = require('../controladores/Usuarios.controlador');

/*=============================================
IMPORTAMOS EL MIDDLEWARE
=============================================*/

const { verificarToken } = require('../middlewares/autenticacion');

/*=============================================
CREAMOS LAS RUTAS HTTP
=============================================*/

app.get('/mostrar-Usuarios', verificarToken, Usuarios.mostrarUsuarios);

//app.post('/crear-Usuario', verificarToken, Usuarios.crearUsuario);

app.post('/crear-Usuario', verificarToken, Usuarios.crearUsuario);
app.put('/editar-Usuario/:id', verificarToken, Usuarios.editarUsuario);

app.delete('/borrar-Usuario/:id', verificarToken, Usuarios.borrarUsuario);

app.post('/login', Usuarios.login);

/*=============================================
EXPORTAMOS LA RUTA
=============================================*/

module.exports = app;