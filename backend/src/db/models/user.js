import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

let UserModel = mongoose.model('User', userSchema);

export default UserModel;
