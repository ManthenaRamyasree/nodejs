// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String },
//     mobile: { type: Number }
// });

// const UserModel = mongoose.model('UserModel', UserSchema);

// module.exports = UserModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    phone: { type: String, required: true },
    profileImgURL: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
