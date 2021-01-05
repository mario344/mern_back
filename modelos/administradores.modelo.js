/*=============================================
ESQUEMA PARA EL MODELO CONECTOR A MONGODB
=============================================*/
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UsuariosSchema = new Schema({

    usuario: {
        type: String,
        required: [true, "El usuario es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    }
})


/*=============================================
Evitar devolver en la DATA el campo Password
=============================================*/

UsuariosSchema.methods.toJSON = function() {

    let admin = this;
    let adminObject = admin.toObject();
    delete adminObject.password;

    return adminObject;

}

/*=============================================
EXPORTAMOS EL MODELO
=============================================*/

module.exports = mongoose.model("Usuarios", UsuariosSchema);