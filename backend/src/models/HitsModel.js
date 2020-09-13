const {Schema, model} = require('mongoose');

const HitSchema = new Schema({
    TotalHits: {
        type: Number
    }
});

module.exports = model('Hits', HitSchema);