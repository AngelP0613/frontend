const mongoose = require("mongoose")

const dbName = "bit-shop"
const uri = `mongodb+srv://angelp-06:angelp.0614@cluster0.0vt8o4s.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose