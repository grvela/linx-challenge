const {Schema, model } = require('mongoose');

const LinkSchema = new Schema({
    Link: {
        type: String,
        required: true
    },
    ShortLink: {
        type: String,
        required: true
    },
    Hits: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
}
);

module.exports = model('Link', LinkSchema);