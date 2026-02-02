import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: String,
        email: String,
        website: String,
        image: String,
    },
    { versionKey: false }
);

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
