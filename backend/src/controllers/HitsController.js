const Hits = require('../models/HitsModel');
const Link = require('../models/LinkModel');
const { store } = require('./LinkController');

module.exports = {
    async index(request, response){
        if(request.body){
            const url = request.body.link;
            await Link.findOneAndUpdate({Link: url}, {$inc: {Hits: 1}})
        }

        const hits = await Link.find({}).select('Hits -_id');
        let TotalHits = 0;
        hits.map(obj => (
            TotalHits += obj.Hits
        ));
        const data = {
            total: TotalHits
        }
        return response.json(data);
    },
}