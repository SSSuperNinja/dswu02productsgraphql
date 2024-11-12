const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    facturapiId: { type: String },
    rfc: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    direccion: { type: String },
    zip: { type: Number },
    tel: { type: Number },
    createdAt: { type: Date, default: Date.now },
    role: { type: String },
    payMethod: { type: String }
});

module.exports = mongoose.model('User', userSchema);
