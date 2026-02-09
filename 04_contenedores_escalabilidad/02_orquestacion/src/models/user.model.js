import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    website: String,
    image: String,
}, { versionKey: false },);

export const UserModel = mongoose.model("UserModel", userSchema); 