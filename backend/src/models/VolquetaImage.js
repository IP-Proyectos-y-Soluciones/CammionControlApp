const mongoose = require('mongoose');

const imageVolquetaSchema = new mongoose.Schema({
    volqueta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Volqueta',
        required: true,
    },
    image_data: {
        type: Buffer,
        required: true,
    },
    mimeType: {
        type: String,
        required: true,
    },
});

const VolquetaImage = mongoose.model('VolquetaImage', imageVolquetaSchema);

module.exports = VolquetaImage;
