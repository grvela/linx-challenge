const Hits = require('../models/HitsModel');
const Link = require('../models/LinkModel');

module.exports = {
    async index(request, response){
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