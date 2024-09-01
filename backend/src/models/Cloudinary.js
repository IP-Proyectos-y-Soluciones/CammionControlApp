const mongoose = require('mongoose');

const cloudinarySchema = new mongoose.Schema(
    {
        url: String,
    },
    {
        timestamps: false,
        autoCreate: false,
    },
);

const Cloudinary = mongoose.model('Cloudinary', cloudinarySchema);

export default Cloudinary;
