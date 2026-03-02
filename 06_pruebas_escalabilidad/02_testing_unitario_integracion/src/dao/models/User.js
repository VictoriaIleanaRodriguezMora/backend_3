import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  pets: {
    // Es un campo del schema que va a guardar referencias a documentos de otra colección (en este caso, Pets).
    // pets es un array. Cada elemento del array es un objeto
    type: [
      {
        _id: {
          type: mongoose.SchemaTypes.ObjectId, // Cada _id es un ObjectId. Ese ObjectId corresponde al _id de otro documento
          ref: "Pets", // Este ObjectId pertenece al modelo Pets. Entonces Mongoose va a reemplazar cada _id por el documento completo de Pets.
        },
      },
    ],
    // en la bdd se guarda algo así
    /*
    {
    "pets": [
        { "_id": "65f8..." },
        { "_id": "65fa..." }
        ]
    }
    */
    default: [], // Si no le pasás nada al crear el documento, pets va a empezar como: pets: []
  },
});

const userModel = mongoose.model(collection, schema);

export default userModel;
