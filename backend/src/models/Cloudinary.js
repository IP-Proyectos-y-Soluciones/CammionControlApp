const mongoose = require('mongoose');

const cloudinarySchema = new mongoose.Schema(
  {
    url: String,
    tanqueo:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cloudinary',
      required: true,
    }
  },
 
  
  {
    timestamps: false,
    autoCreate: false,
  },
  
);

const Cloudinary = mongoose.model(
  'Cloudinary',
  cloudinarySchema,
);

export default Cloudinary;
