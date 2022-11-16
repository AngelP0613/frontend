// 1 importar mongoose
const mongoose = require("mongoose")

//schema -> colección

// 2 llamar a la clase Schema
const { Schema } = mongoose
// 3 crear el schema de lo que yo necesite - instaciar

const userSchema = new Schema(
    {
        firstName: { type: String,},
        lastName: {type: String,},
        email: {type: String, },
        password: {type: String,},
        isAdmin: {type: Boolean,}

    },
    {
        versionKey: false, // que deseamos capturar cada que se inserte un dato
        timestamps: true
    }
)

// 4 exportar como un modelo
//module.exports = mongoose.model("nombre collección", el schema de la coleccion)
module.exports = mongoose.model("user", userSchema)