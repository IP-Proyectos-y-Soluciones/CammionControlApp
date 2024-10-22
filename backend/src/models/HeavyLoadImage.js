const mongoose = require('mongoose');

const imageHeavyLoadSchema = new mongoose.Schema({
    heavyload: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CargaPesada',
        required: true,
    },
    image_data: {
        type: Buffer,
        required: true,
    },
    mimeType: {
        type: String, // 'image/png', 'image/jpeg', etc.
        required: true,
    },
});

const HeavyLoadImage = mongoose.model('HeavyLoadImage', imageHeavyLoadSchema);

module.exports = HeavyLoadImage;
