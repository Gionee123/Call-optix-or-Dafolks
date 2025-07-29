const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: [true, "Admin name is required"],
        unique: true
    },
    adminPassword: {
        type: String,
        required: [true, "Admin password is required"]
    }
}, { timestamps: true });

const adminModel = mongoose.model('Admin', AdminSchema);

module.exports = adminModel; 